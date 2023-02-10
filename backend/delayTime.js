const getDelayTime = () => {
    const maxTime = 4
    const minTime =2.5

    return (Math.random() * (maxTime - minTime) + minTime) * 1000;
  }

  module.exports = getDelayTime