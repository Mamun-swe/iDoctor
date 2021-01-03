
// Single File Upload function
const fileUpload = (file, uploadPath) => {
    // Get file extension from filename
    const extension = file.name.split('.')[1]
    // Rename file with datetime format
    const filename = 'profile_' + Date.now() + '.' + extension
    // Upload path
    path = uploadPath + filename
    // Move file to path
    const moveFile = file.mv(path)

    if (!moveFile) {
        return res.status(501).json({ message: 'file upload error' })
    }

    return filename
}

module.exports = {
    fileUpload
}