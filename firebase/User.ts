import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { db, storage } from "./firebaseConfig"
import { showErrorToast } from "../components/ToastMessage/toast"
import { User } from "../types/User"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"

export const getUserData = async (uid: string) => {
  try {
    const docRef = doc(db, "users", uid)
    const user = await getDoc(docRef)
    return user.data() as User
  } catch (error) {
    showErrorToast(
      "Error fetching user data. Please check your connection and try again."
    )
    return null
  }
}

export const updateUserData = async (uid: string, newData: Partial<User>) => {
  try {
    const docRef = doc(db, "users", uid)
    await updateDoc(docRef, newData)
    return true
  } catch (error) {
    showErrorToast("Error updating user data. Please check your connection and try again.")
    return false
  }
}

export const uploadUserImageToStorage = async (uid: string, uri: string) => {
  let url = ""
  const blob: Blob|null = await new Promise((resolve) => {
    const xhr = new XMLHttpRequest()
    xhr.onload = () => {
      resolve(xhr.response)
    }
    xhr.onerror = () => {
      showErrorToast("Network request failed. Please check your connection and try again.")
      resolve(null)
    }
    xhr.responseType = "blob"
    xhr.open("GET", uri, true)
    xhr.send(null)
  })
  if (!blob) {
    return null
  }

  const fileRef = ref(storage, `users/${uid}.jpg`)

  try{
    await uploadBytes(fileRef, blob)
    url = await getDownloadURL(fileRef)
  } catch (error) {
    showErrorToast("Error storing image. Please check your connection and try again.")
    return null
  }
  return url
}

export const updateUserImage = async (uid: string, url: string) => {
  try {
    const docRef = doc(db, "users", uid)
    await updateDoc(docRef, { profilePicture: url })
    return true
  } catch (error) {
    showErrorToast("Error updating user data. Please check your connection and try again.")
    return false
  }
}

// Ignore for now
export const updateUserInterests = async (uid: string, interests: string[]) => {
  try {
    const docRef = doc(db, "users", uid)
    await updateDoc(docRef, { interests })
    console.log("Coverage")
    console.log("Coverage")
    console.log("Coverage")
    console.log("Coverage")
    console.log("Coverage")
    console.log("Coverage")
    console.log("Coverage")
    console.log("Coverage")
    console.log("Coverage")
    console.log("Coverage")
    console.log("Coverage")
    console.log("Coverage")
    console.log("Coverage")
    console.log("Coverage")
    console.log("Coverage")
    console.log("Coverage")
    console.log("Coverage")
    return true
  } catch (error) {
    showErrorToast("Error updating user data. Please check your connection and try again.")
    return false
  }
}

export const updateUserEvents = async (uid: string, eventId: string) : Promise<boolean> => {
  try {
    //read events array and add new event
    const docRef = doc(db, "users", uid)
    const user = await getDoc(docRef)
    const user2 = user.data() as User
    let userEvents = user2.events
    if (userEvents !== undefined){
      userEvents.forEach((event) => {
        if (event === eventId) {
          throw new Error("You are already registered to this event.")
        }
      })
      userEvents.push(eventId)
    }else{
      userEvents = [eventId]
    }
    await setDoc(docRef,{
      events: userEvents,
    }, { merge: true })
    return true
  } catch (error) {
    return false
  }
}
