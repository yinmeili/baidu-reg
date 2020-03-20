module.exports = function(grunt) {
    grunt.initConfig({

        htmlmin: {
            options: {
	removeComments:true,
                collapseWhitespace: true
            },
            files: {
                src: "./reg.html",
                dest: "bai/reg.html"
            }
        },
      cssmin: {
            "./bai/reg.css":"./reg.css"
        },
       uglify: {
            "./bai/reg.js":"reg.js"
        }
    })


    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default",["htmlmin","cssmin","uglify"]);
}