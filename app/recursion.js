recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {String[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {

    let fnf = (_data, _dirName) => {

      var files = _data.files;

      if(_dirName){
        if(_dirName !== _data.dirName){
          files = [];
        } else {
          _dirName = false;
        }
      }

      _data.subDirs.map(subdir => {
        files = files.concat(fnf(subdir, _dirName));
      });

      return files;
    }

    ret = fnf(data, dirName)
    console.log(ret);
    return ret;

  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    let fbn = (num) => {
      if (num <= 1) return 1;
      return fbn(num - 1) + fbn(num - 2); 
    } 

    return fbn(n-1);
  },
};
