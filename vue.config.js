module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions:{
      sass: {
        data: `@import "./src/lib/hotcss/px2rem.scss";`
      }
    }
  }
};
