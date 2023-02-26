export type photosType = {
   small: string | null,
   large: string | null
}
export type ContactsType = {
   facebook: string,
   website: string,
   vk: string;
   twitter: string,
   instagram: string,
   mainLink: string,
   youtube: string,
};
export type profileType = {
   aboutMe: string,
   contacts: ContactsType,
   fullName: string,
   lookingForAJob: string,
   lookingForAJobDescription: string,
   photos: photosType,
   userId: number
}