
import { getStorage, ref, uploadBytes, listAll, getDownloadURL, } from "firebase/storage";
import { firebaseApp } from "./firebase";
const upload = async (file: File) => {
    const storage = getStorage(firebaseApp);
    if (file === null) return;

    const imageRef = ref(storage, `images/${Date.now()}_${file.name}`);
    const result = await uploadBytes(imageRef, file).then((snapshot) =>
        getDownloadURL(snapshot.ref)
    );

    return result;
};

export default upload;

