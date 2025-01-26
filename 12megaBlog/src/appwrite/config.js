import Conf from "../conf/conf";
import { Client, ID, Storage, Query, Databases } from "appwrite";



export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(Conf.appwriteUrl)
            .setProject(Conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("appwrite services :: createPost :: error", error);
            
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("appwrite service :: updatePost :: error",error);
            
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log("appwrite services :: deletepost :: error",error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("appwrite service :: getPost :: error", error);
            return false;
        }
    }
    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                queries,
                
            )
        } catch (error) {
            console.log("appwrite services :: getposts :: error", error);
            return false;
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                Conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("appwrite service :: uploadfile :: error", error);
            return false;
        }
    }

    async deletedFile(fileId){
        try {
            await this.bucket.deleteFile(
                Conf.appwriteBucketId,
                fileId,
            )
            return true;
        } catch (error) {
            console.log("appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview (fileId){
        return this.bucket.getFilePreview(
            Conf.appwriteBucketId,
            fileId
        )
    }

}


const service = new Service()

export default service

