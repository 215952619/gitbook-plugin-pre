module.exports = {
    blocks: {
        pre: {
            process: function(block) {
                let kwargs = block.kwargs
                let ignoreArgs = ['_tag', '__keywords']

                if (kwargs['_tag']) {
                    let body = `<span>{% ${kwargs['_tag']}`

                    body =
                        body +
                        Object.keys(kwargs)
                            .map(item => {
                                if (!ignoreArgs.includes(item)) {
                                    if (item === 'pre_tag') {
                                        return ` _tag="${kwargs[item]}"`
                                    }
                                    return ` ${item}="${kwargs[item]}"`
                                }
                                return undefined
                            })
                            .filter(item => item !== undefined)
                            .join(',')

                    body = body + ` %}${block.body}{% end${kwargs['_tag']} %}</span>`
                    return {
                        body: body,
                        parse: false
                    }
                } else {
                    return {
                        body: block.body,
                        parse: true
                    }
                }
            }
        }
    }
}
