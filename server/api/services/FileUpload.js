
// Single File Upload
const fileUpload = file => {
    // Get file extension from filename
    const extension = file.name.split('.')[1]
    // Rename file with datetime format
    const filename = Date.now() + '.' + extension
    // Upload path
    path = './uploads/doctor/profiles' + filename
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