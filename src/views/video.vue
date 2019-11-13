<template>
    <div class="monitor_goods">
        <el-button @click="initVideo">播放</el-button>
        <video ref="videoPlayer" class="video-js"></video>
    </div>

</template>

<script>
    import videojs from 'video.js';
    export default {
        name: "monitor_goods",
        data(){
            return {
                player: null,
                options:{
                    autoplay: true,
                    controls: true,
                    poster:"//vjs.zencdn.net/v/oceans.png",
                    preload:"auto",
                    'data-setup':'{}',
                    sources: [
                        {
                            src:
                                "//vjs.zencdn.net/v/oceans.mp4",
                            type: "video/mp4"
                        }
                    ]
                }
            }
        },
        mounted() {
            console.log('this.$video')
            console.log('this.$video',this.$video)
            this.initVideo()

        },
        beforeDestroy() {
            if (this.player) {
                this.player.dispose()
            }
        },
        methods: {
            initVideo() {
                this.player = this.$video(this.$refs.videoPlayer, this.options, function onPlayerReady() {
                    console.log('onPlayerReady', this);
                    this.currentTime('8')
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
