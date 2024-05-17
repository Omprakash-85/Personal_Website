const FormSubmission = require("./contact.modal");

async function saveFormData(formData) {
  try {
    const submission = new FormSubmission(formData);
    await submission.save();
    return submission;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  saveFormData
};
