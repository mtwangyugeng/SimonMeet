export function addRoute(storeName, theStore) {
    theStore.subscribe((v) => {
        if(v === "") return;
        // Get the current hash
        let hash = new URL(window.location.href).hash;
        
        // Check if the store name is in the hash
        const regexR = new RegExp(`(&${storeName}=)([^&]+)`, 'i');
        const match = hash.match(regexR);

        // If no match, append the store 
        if(match === null){ 
            if(v === "") return;
            if (hash === "") hash = '#'
            history.pushState({}, null, hash + `&${storeName}=` + v);
            return
        };
        console.log("trying to replace", regexR, v, hash)
        hash = hash.replace(regexR, "$1" + v)
        history.pushState({}, null, hash);
    });

    function traceURL() {
        console.log("!!!traceURL!!!");
        const hash = new URL(window.location.href).hash
        const regexR =  /&(.+)=(.+)/;
        const match = hash.match(regexR);
        console.log("!!!traceURL!!!",hash);
        if(match === null){ 
            theStore.set("");
            return
        };

        const storeNameN = match[1];
        const targetId = match[2];
        console.log("!!!traceURL!!!",storeName, targetId);
        if (storeName === storeNameN) theStore.set(targetId);
    }

    window.addEventListener('popstate', traceURL)
    window.addEventListener('hashchange', traceURL)
    traceURL();
}