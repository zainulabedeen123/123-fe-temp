import jwt from 'jsonwebtoken'

export const isUserLoggedIn = () => {
    const data = JSON.parse(localStorage.getItem('userData'))
    if (data) {
        const secrect = jwt.decode(data.token)
        const expiretime = secrect.exp * 1000
        if (Date.now() >= expiretime) {
            // logoutApi(data);
            localStorage.removeItem('userData')
            // return false
        }
        //   else {
        //     console.log('skdcbwjecbkwjecnwe', Date.now() >= expiretime);
        //     return true
        //   }
    }
    return JSON.parse(localStorage.getItem('userData'))
}

export const getUserData = () => JSON.parse(localStorage.getItem('userData'))
