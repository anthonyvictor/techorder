export type Theme = {
    back: string, 
    container : string
    text : string
    primary : string
    ok : string
    error : string
    info : string

}

export const dark: Theme ={
    back: '#e6e6e6',
    container: '#b3b3b3',
    text: '#13151a',
    primary: '#16c0f0',
    ok: '#08c450',
    error: '#f02f11',
    info: '#fcde44'
}

export const light: Theme = { 
    back: '#13151a',
    container: '#1e2129',
    text: '#e6e6e6',
    primary: '#2a55bf',
    ok: '#0c3d09',
    error: '#911300',
    info: '#e6bd2c'
    
    // back: '#b3b3b3',
    // backSub: '#e6e6e6',
    // font: '#13151a',
    // fontSub: '#1e2129',
    // primary: '#2a55bf',
    // primarySub: '#2a55bf',
    // ok: '#0c3d09',
    // okSub: '#0c3d09',
    // error: '#911300',
    // errorSub: '#911300',
    // info: '#a38000',
    // infoSub: '#a38000',
}

// export const dark: Theme = { 
//     back: '#13151a',
//     backSub: '#1e2129',
//     font: '#e6e6e6',
//     fontSub: '#b3b3b3',
//     primary: '#4674e3',
//     primarySub: light.primary,
//     ok: '#289c21',
//     okSub: light.ok,
//     error: '#eb3417',
//     errorSub: light.error,
//     info: '#e6bd2c',
//     infoSub: light.info,
//   }