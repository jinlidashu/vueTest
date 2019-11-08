<template>
    <div class="monitor_video">
        <el-container>
            <el-main>
                <el-tabs v-model="activeName" @tab-click="handleClick">

                    <el-tab-pane label="视频监控" name="first">
                        <span slot="label"><i class="el-icon-view"></i> 视频监控</span>
                        <div class="video_Monitor_box">
                            <div class="video_Monitor">
                                <el-tooltip class="item" effect="dark" content="使用帮助" placement="top">
                                    <el-button icon="el-icon-question" class="monitorHelp" size="small">使用帮助</el-button>
                                </el-tooltip>
                                <h3>视频监控</h3>
                                <p>可对抖音视频进行监控，提供分钟级的视频点赞数、评论数、转发数监测，掌握抖音号视频热度走向。</p>
                            </div>
                            <div class="monitor_Type_radio">
                                <el-radio v-model="monitor_Radio" class="monitor_Type" label="1">
                                    <span>即时监控</span>
                                    <p>已发布，输入推文链接地址开始监控</p>
                                </el-radio>
                                <el-radio v-model="monitor_Radio" class="monitor_Type" label="2">
                                    <span>预约监控</span>
                                    <p>发布时间已确定尚未发送，设置时间预约监控</p>
                                </el-radio>
                            </div>
                            <div class="monitor_radio_box">
                                <div class="m_radio_title">视频链接</div>
                                <div class="m_radio_search">
                                    <el-input v-model="input" placeholder="请输入抖音视频地址" style="width:660px;margin-right:10px;"></el-input> <el-button type="success">查询</el-button>
                                    <div class="error">您输入的链接有误，请重新输入～</div>
                                </div>
                                <div class="praiseRemind">
                                    <label for="">点赞数提醒:</label>
                                    <el-switch
                                            v-model="praiseRemind"
                                            active-color="#57c42c"
                                            inactive-color="#cacaca"
                                    >
                                    </el-switch>
                                    <div class="startRemind" v-if="praiseRemind">
                                        <el-input v-model="input" size="small" placeholder="" style="width:160px;margin-right:10px;"></el-input>开启后点赞数达到该值时，将通过数简数据公众号给您发送通知。
                                    </div>

                                </div>
                                <div class="monitor_duration">
                                    <h5>监控时长</h5>
                                    <el-radio v-model="duration_radio" label="24">24小时</el-radio>
                                    <el-radio v-model="duration_radio" label="36">36小时</el-radio>
                                    <el-radio v-model="duration_radio" label="72">72小时</el-radio>
                                    <el-radio v-model="duration_radio" label="7">7天</el-radio>

                                </div>
                                <div class="monitor_more">
                                    <h5>更多数据监控 <span>（选择同步监控粉丝数，关联商品浏览量和销售量，将消耗更多的监控次数）</span></h5>
                                    <p><el-checkbox v-model="checked">粉丝数监控</el-checkbox> <i class="el-icon-document-checked"></i>关联商品监控</p>
                                </div>
                                <div class="monitor_btn">
                                    <el-button type="success">开始监控</el-button>
                                    <p>本次监控共需消耗1次视频监控次数，本月剩余3次视频监控次数</p>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="监控历史" name="second">
                        <span slot="label"><i class="el-icon-document"></i> 监控历史</span>
                        <div class="monitor_historic">
                            监控历史
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-main>
        </el-container>

    </div>
</template>

<script>
    export default {
        name: "monitor_video",
        data() {
            return {
                activeName:'first',
                monitor_Radio:'1',
                praiseRemind:false,
                duration_radio:'24',
            }
        },
        methods: {
            searchClick() {

            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
        }
    }
</script>

<style lang="stylus" scoped>
.video_Monitor_box
    width 750px
    margin 0 auto
    padding 70px 0
    .video_Monitor
        padding-top 170px
        background url('~@assets/img/monitor/icon-monitor.png') no-repeat top center
        background-size 160px 113px
        h3
            text-align center
            font-size 24px
            color #333
            margin 0
            padding-bottom 10px
            font-weight normal
        p
            color #999
            padding-bottom 30px
    .monitor_Type
        width 48%
        float left
    .monitorHelp
        position absolute
        top 20px
        right 20px
    .monitor_Type_radio
        height 58px
        margin-bottom 30px
    .monitor_radio_box
        .m_radio_title
            color #585858
            padding-bottom 20px
            font-size 14px
        .m_radio_search
            margin-bottom 20px
            .error
                color #f00
                font-size 12px
                margin-top 10px

    .praiseRemind
        height 25px
        label
            color #999
        .startRemind
            margin-top 10px
            color #9d9d9d
    .monitor_duration
        h5
            color: #585858
            font-weight normal
            font-size 15px
            margin-bottom 20px
    .monitor_more
        h5
            color #585858
            font-weight normal
            font-size 15px
            margin-bottom 20px
            span
                color #999
                font-size 14px
        p
            font-size: 14px
            color #999

    .monitor_btn
        text-align center
        border-top 1px solid #eee
        p
            padding-bottom 10px
            text-align center
            font-size 16px
            color #585858
</style>
<style lang="stylus">
    .monitor_video

        .el-tabs__content
            background #fff
        .monitor_Type
            display flex
            .el-radio__input
                width 15px
            .el-radio__label
                flex 1
                span
                    color #333
                    font-size 16px
                p
                    color #999

        .el-radio__input
            .el-radio__inner
                &:hover
                    border-color #52c41a
            &.is-checked
                .el-radio__inner
                    border-color #52c41a
                    background #52c41a
                +.el-radio__label
                    color #606266
                    span
                        color #333
                        font-size 16px
                    p
                        color #999


</style>
