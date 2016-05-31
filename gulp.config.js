module.exports = function () {
    var config = {
      allTs: './dev/**/*.ts',
      typings: './node.modules/typings/**/*/*.d.ts',
      tsOutputPath: './app/'
    };
    
    return config;
}