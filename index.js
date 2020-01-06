module.exports = {
    book: {
        assets: './assets',
        css: ['index.css']
    },
    blocks: {
        em: {
            process: function(block) {
                let { pre, type, color, style } = block.kwargs
                let realColor = color ? 'background: ' + color + ';' : ''
                let realStyle = style ? style + realColor : realColor

                if (pre === 'pre') {
                    var body = '<span>{% em'
                    body = type ? body + ' type="' + type + '"' : body
                    body = color ? body + ' color="' + color + '"' : body
                    body = style ? body + ' style="' + style + '"' : body
                    body = body + ' %}' + block.body + '{% endem %}</span>'

                    return {
                        body: body,
                        parse: false
                    }
                } else {
                    var body = '<span class="pg-emphasize '
                    body = type ? body + ' pg-emphasize-' + type + '"' : body + '"'
                    body = realStyle ? body + ' style="' + realStyle + '"' : body
                    body = body + '>' + block.body + '</span>'

                    return {
                        body: body,
                        parse: true
                    }
                }
            }
        }
    }
}
