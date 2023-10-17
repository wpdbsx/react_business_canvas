//imageUpload.ts
//이미지 업로드 함수
//return 값 Promise<string>


import { ref, uploadBytesResumable, getStorage, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid"; //firebase image upload용 id

const firebaseImageUpload = (files: FileList): Promise<string> => {
    return new Promise(async (resolve, reject) => {
        try {
            const storageRef = ref(getStorage(), uuidv4());
            const uploadTask = uploadBytesResumable(storageRef, files[0]);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    progress === 100 && alert("Upload is " + progress + "% done");
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                    reject(error);
                },
                async () => {
                    // Handle successful completion of the upload task here
                    const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
                    console.log(
                        `File uploaded successfully, download URL: ${downloadUrl}`
                    );
                    resolve(downloadUrl);
                }
            );
        } catch (error) {
            reject(error);
        }
    });
};
export default firebaseImageUpload;