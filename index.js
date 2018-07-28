const shapefile = require('shapefile')
const fetch = require('node-fetch')
const config = require('config')

const main = async function() {
  const server = config.get('server')
  const dataset = config.get('dataset')
  const t = config.get('t')
  const shp = await fetch(`https://${server}/${dataset}/${t}.shp`)
  const dbf = await fetch(`https://${server}/${dataset}/${t}.dbf`)
  shapefile.open(shp.body, dbf.body, {encoding: 'utf-8'})
    .then(source => source.read()
      .then(function log(result) {
        if (result.done) return
        console.log(JSON.stringify(result.value))
        return source.read().then(log)
      }))
    .catch(error => console.error(error.stack));
}

main()
