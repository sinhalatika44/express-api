/**
 * Created by latika sinha
*/

const sampleBlFunction = async(data) => {
  try {
    console.log(data);
    return {
      error: false,
      code: 200,
      e: null,
      data,
    };
  } catch(e) {
    console.log('e-sampleBlFunction', e);
    return {
      error: true,
      code: 500,
      e: JSON.stringify(e),
      data: null,
    };
  }
};

module.exports = {
  sampleBlFunction,
};
