class ProxyFactory {
    static create(object, props, method) {
        return new Proxy(object, {
            get(target, prop, receiver) {
                if(props.includes(prop) && ProxyFactory._isFunction(target[prop])) {
                    return function() {
                        const proxy = Reflect.apply(target[prop], target, arguments);
                
                        method(target);
                
                        return proxy;
                    }
                }
                
                return Reflect.get(target, prop, receiver);
            },
            
            set(target, prop, value, receiver) {
                const proxy = Reflect.set(target, prop, value, receiver);
                
                if(props.includes(prop)) method(target);
                
                return proxy;
            }
        });
    }
    
    static _isFunction(fn) {
        return typeof(fn) == typeof(Function);
    }
}