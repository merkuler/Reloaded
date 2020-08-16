const {src, dest, series, watch} = require('gulp')

const sync = require('browser-sync').create()

function serve() {
    sync.init({
        server: './server'
    })

    watch('server/**.html').on('change', sync.reload)
    watch('server/**.css').on('change', sync.reload)
}

exports.serve = serve