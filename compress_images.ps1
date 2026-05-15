$sourcePath = "c:\xampp\htdocs\ds-landing\public\assets\portfolio"
Add-Type -AssemblyName System.Drawing

function Resize-Image {
    param (
        [string]$Path,
        [int]$MaxWidth = 1600,
        [int]$Quality = 75
    )
    $img = [System.Drawing.Image]::FromFile($Path)
    $width = $img.Width
    $height = $img.Height

    if ($width -gt $MaxWidth) {
        $ratio = $MaxWidth / $width
        $newWidth = $MaxWidth
        $newHeight = [int]($height * $ratio)
    } else {
        $newWidth = $width
        $newHeight = $height
    }

    $newImg = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    $graphics = [System.Drawing.Graphics]::FromImage($newImg)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.DrawImage($img, 0, 0, $newWidth, $newHeight)

    $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatDescription -eq "JPEG" }
    $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $Quality)

    $img.Dispose()
    $newImg.Save($Path, $encoder, $params)
    $newImg.Dispose()
}

# Process Golf images
Get-ChildItem -Path $sourcePath -Filter "jb-golf-*.jpg" | ForEach-Object {
    Write-Host "Compressing $($_.Name)..."
    Resize-Image -Path $_.FullName
}

# Process Design images
Get-ChildItem -Path "$sourcePath\diseno" -Filter "design-*.jpg" | ForEach-Object {
    Write-Host "Compressing $($_.Name)..."
    Resize-Image -Path $_.FullName
}
