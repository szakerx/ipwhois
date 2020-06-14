async function getInformation(req, res) {
    try {
      return res.status(201).json({
        ip: req.params.ip,
      });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
const Handler = {
    getInformation: getInformation,
  };
  
  export default Handler;