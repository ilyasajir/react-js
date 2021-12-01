class Utils {


     static VatFormat(values){
         return values.replace(/(\d{2})(\d{3})(\d{3})(\d{1})(\d{3})(\d{3})/, '$1.$2.$3.$4-$5.$6');
    }

    static StorageLocal(type = 'get', name = 'token',values = null){
         try{
             switch (type){
                 case "get":
                     return localStorage.getItem(name);
                 case "set":
                     localStorage.setItem(name,values)
                     return {
                         status: true,
                         message :`${name} - added to localStorage`
                     }
                 case "remove":
                     localStorage.removeItem(name);
                     return {
                         status: true,
                         message :`${name} - success removed localStorage`
                     }
                 default:
                     return false
             }
         }catch(err){
             return null;
         }
    }

}

export default Utils