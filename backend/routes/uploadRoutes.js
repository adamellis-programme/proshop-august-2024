import path from 'path'
import express from 'express'
import multer from 'multer'
const router = express.Router()

/**
 *
 * diskStorage tells us it is on the disk, server
 * destination describe what storage we are going to use this could me amazom, disk etc
 * pass in req, file and cb to destination
 * we call cb in the function
 *
 *  1 - the null is the errorr
 *  2 - /uploads is where we want the file to go which is in the ROOT
 *  3 - create in the root a file called uploads
 *  4 - file name is a way to format how out files are formatted
 *  5 -
 *
 */

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = `${file.fieldname}-${Date.now()}${path.extname(
      file.originalname
    )}`

    cb(null, uniqueSuffix)
  },
})

// all properties are avalible on the file object
// test just tests to see if it matched the regular expression
function checkFileType(file, cb) {
  console.log(file)
  const filetypes = /jpg|jpeg|png/ // regex

  // checks regex
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  // if passes the tests we return the cb with true
  if (extname && mimetype) {
    return cb(null, true)
  } else {
    // here we return the firsh argument which is an error
    cb({ message: 'Images only!' })
  }
}

const upload = multer({
  storage,
})

// wr are using single as only allow single file
// 'image' can be named anything
// file.fieldname in uniqueSuffix is what ever we pute here 'image'
// actual upload is handled by upload.single
router.post('/', upload.single('image'), (req, res) => {
  // after img upload we just send back this info
  res.send({
    message: 'Image uploaded successfully',
    image: `/${req.file.path}`,
  })
})
export default router

// bring into the server.js
