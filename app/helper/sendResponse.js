const SendResponse = async (sendData, res) => {
  const { status, data, message } = sendData;
  res.status(status).json({
    statusCode: status,
    data: data || "",
    message: message,
  });
};
module.exports = SendResponse;
