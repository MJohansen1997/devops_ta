const ghPages = require("gh-pages")

ghPages.publish(
    'public', // the first argument is the local folder to publish
    {
        branch: 'master', // <== this is explicitly telling the library to publish the folder stated above to this branch
        repo: 'https://github.com/Bam92/abelmbula.git',
    },
    (err) => {
        if(err) console.error(err)
        else console.log('Deploy completed!')
    }
)