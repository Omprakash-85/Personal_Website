const { saveFormData } = require("./contact.services");

async function submitForm(req, res) {
  try {
    const formData = req.body;
    const submission = await saveFormData(formData);
    // console.log("formdata", formData);
    res
      .status(200)
      .json({
        success: true,
        message: "Form submitted successfully",
        data: submission,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to submit form",
        error: error.message,
      });
  }
}

module.exports = {
  submitForm,
};
