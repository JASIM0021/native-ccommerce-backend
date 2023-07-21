const TryCatch = async (logic) => {
  try {
    await await logic();
  } catch (error) {
    console.log("Somthing went wrong: " + error);
  }
};
module.exports = TryCatch;
