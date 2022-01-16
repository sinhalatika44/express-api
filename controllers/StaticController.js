/**
 * Created by latika sinha
*/

const health = async(req, res) => {
  try {
    const date = new Date();
    res.send({
      error: false,
      code: 200,
      message: 'healthy api - all services are up and running',
      e: null
    });
  } catch(e) {
    console.log('e-health', e);
    res.send({
      error: true,
      code: 500,
      message: 'error! health check failed',
      e: e.stack,
    });
  }
};

module.exports = {
  health,
};
