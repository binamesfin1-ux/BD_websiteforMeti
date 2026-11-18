Add-Type -AssemblyName System.Drawing

$imagesDir = Join-Path $PSScriptRoot "..\public\images"
$files = Get-ChildItem -Path $imagesDir -Filter "*.jpg"

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]82)

$totalOriginal = 0
$totalNew = 0

foreach ($file in $files) {
    $origPath = $file.FullName
    $origSize = $file.Length
    $totalOriginal += $origSize
    
    # Load original image
    $tempStream = [System.IO.File]::OpenRead($origPath)
    $origImage = [System.Drawing.Image]::FromStream($tempStream)
    $tempStream.Close()
    
    $origWidth = $origImage.Width
    $origHeight = $origImage.Height
    
    $maxWidth = 1600
    $maxHeight = 1600
    
    $scale = [Math]::Min([double]$maxWidth / $origWidth, [double]$maxHeight / $origHeight)
    if ($scale -gt 1.0) {
        $scale = 1.0
    }
    
    $newWidth = [int][Math]::Round($origWidth * $scale)
    $newHeight = [int][Math]::Round($origHeight * $scale)
    
    $newBitmap = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    $graphics = [System.Drawing.Graphics]::FromImage($newBitmap)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    
    $graphics.DrawImage($origImage, 0, 0, $newWidth, $newHeight)
    $origImage.Dispose()
    $graphics.Dispose()
    
    $tempOutPath = "$origPath.tmp.jpg"
    $newBitmap.Save($tempOutPath, $jpegCodec, $encoderParams)
    $newBitmap.Dispose()
    
    $newSize = (Get-Item $tempOutPath).Length
    
    # If the compressed version is smaller, replace it
    if ($newSize -lt $origSize) {
        Remove-Item $origPath -Force
        Rename-Item $tempOutPath $file.Name -Force
        $totalNew += $newSize
        Write-Host ("Optimized {0}: {1:N1} MB -> {2:N1} KB ({3:N0}% reduction)" -f $file.Name, ($origSize / 1MB), ($newSize / 1KB), ((1 - $newSize/$origSize)*100))
    } else {
        Remove-Item $tempOutPath -Force
        $totalNew += $origSize
        Write-Host ("Kept {0}: already optimal ({1:N1} KB)" -f $file.Name, ($origSize / 1KB))
    }
}

Write-Host "-------------------------------------------"
Write-Host ("Total: {0:N1} MB -> {1:N1} MB ({2:N0}% overall reduction)" -f ($totalOriginal / 1MB), ($totalNew / 1MB), ((1 - $totalNew/$totalOriginal)*100))

