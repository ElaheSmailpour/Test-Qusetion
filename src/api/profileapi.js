import getAxios from './baseApi'


export const AddprofileApi=(profile)=>{
return getAxios().post("/profile",profile)
}



    export const AddprofileMultiImageApi = (profile) => {
        return getAxios().post("/profile/multiImage", profile)
    }