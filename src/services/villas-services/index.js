const VillasServices = {}
/**********************************************************************
 * @scope   -  USER
 */
/**
 * @access - PUBLIC
 * @scope - USER | VILLA | ADMIN
 * @returns {Promise<void>}
 * @private
 */

//villas
VillasServices._PublicGetRecomendation = async ()=> {}
VillasServices._PublicGetAll = async ()=> {}
//villas - filter
VillasServices._PublicFilterBy = async ()=> {}
//villas - search
VillasServices._PublicSearch = async (query)=> {}

//rooms
VillasServices._PublicGetRooms = async (values)=> {}
VillasServices._PublicFilterRooms = async (values)=> {}
VillasServices._PublicSearchRooms = async (values)=> {}

//rooms - single
VillasServices._PublicGetRoomSingle = async (values)=> {}

//rooms - comments
VillasServices._PublicRoomAddComment = async ()=> {}
VillasServices._PublicRoomDeleteComment = async (id)=> {}

//rooms - likes
VillasServices._PublicRoomLikes = async ()=> {}


/**
 * @access - PRIVATE
 * @scope - VILLA
 */
VillasServices._add = async (values)=> {}
VillasServices._put = async (values)=> {}
VillasServices._delete = async (id)=> {}
VillasServices._get = async ()=> {}
VillasServices._login = async (values)=> {}
VillasServices._register = async (values)=> {}
VillasServices._deleteVilla = async (id)=> {}
VillasServices._putProfile = async (values)=> {}

//template-balasan
VillasServices._getTemplateBalasan = async ()=> {}
VillasServices._addTemplateBalasan = async ()=> {}
VillasServices._putTemplateBalasan = async ()=> {}
VillasServices._deleteTemplateBalasan = async (id)=> {}

/**
 * @access  - PRIVATE
 * @scope   - VILLA
 */
//location
VillasServices._addLocations = async ()=> {}
VillasServices._putLocations = async ()=> {}
VillasServices._deleteLocations = async ()=> {}


//rooms
VillasServices._addRooms = async (values)=> {}
VillasServices._getRooms = async (values)=> {}
VillasServices._putRoom = async (values)=> {}
VillasServices._deleteRooms = async (values)=> {}
VillasServices._putRoomStatus = async (values)=> {}

VillasServices._getSchedules = async ()=> {}