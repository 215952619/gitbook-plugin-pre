### gitbook-plugin-pre

此插件仅仅为方便代码块转换，防止解析

示例：

```
This text is {% pre _tag="em" %}highlighted{% endpre %} !
```

将会解析为：

```
This text is {% em %}highlighted{% endem %} !
```

支持参数继承：


```
This text is {% pre _tag="em",color="#ff0000" %}highlighted{% endpre %} !
```

将会解析为：

```
This text is {% em color="#ff0000" %}highlighted{% endem %} !
```