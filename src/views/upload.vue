<template>
    <div class="upload">
        <el-container>
            <el-main>
                <el-upload
                        class="upload-demo"
                        ref="upload"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :on-change="handleChange"
                        :file-list="fileList"
                        :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器
                    </el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-main>
        </el-container>

    </div>
</template>

<script>
    // import azure from 'azure-storage/browser/azure-storage.file.export'
    // import azure from 'azure-storage'
    export default {
        name: "upload",
        data() {
            return {
                fileList: [],
            }
        },
        mounted() {

        },
        methods: {
            handleChange(file, fileList) {
                console.log(file, fileList)
            },
            submitUpload() {
                const azure = require("@assets/bundle/azure-storage.file.min");
                console.log(azure)
                var fileService = azure.createFileService(
                    'meezaoanalysis',
                    'HDgmUPpgbvoxFFbxdXKkoGffP9SPbr/AA4BYwfUH7UYGpfo4BbIrAsQwouU4YAXTvoQ+ytXe6Jvr36cp2nVTgg==',
                    'https://meezaoanalysis.file.core.windows.net'
                );

                this.fileService_createDirectoryIfNotExists(
                    fileService,
                    'analysis',
                    'Uploads/video/13/13',
                    );
                // this.$refs.upload.submit();
            },
            fileService_createDirectoryIfNotExists(fileService, share, directory) {
                let swe = directory.split("/");
                if (swe.length > 0) {
                    var swes = "";
                    for (let index = 0; index < swe.length; index++) {
                        if (swes == "") {
                            swes = swes + swe[index];
                            fileService.createDirectoryIfNotExists(
                                share,
                                swes,
                                (error, result, response) => {
                                    console.log('========================')
                                    console.log(error, result, response)
                                    if (!error) {
                                    }
                                }
                            );
                        } else {
                            swes = swes + "/" + swe[index];
                            fileService.createDirectoryIfNotExists(
                                share,
                                swes,
                                (error, result, response) => {
                                    console.log('========================')
                                    console.log(error, result, response)
                                    if (result.name == directory) {
                                        // this.$emit("huanshujuchuan", 3);
                                    }
                                }
                            );
                        }
                    }
                } else {
                    return fileService.createDirectoryIfNotExists(
                        share,
                        directory,
                        (error, result, response) => {
                            console.log('========================')
                            console.log(error, result, response)
                            if (!error) {
                            }
                        }
                    );
                }
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            }
        }
    }
</script>

<style scoped>

</style>
