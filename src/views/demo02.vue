<template>
    <div class="hot_video">
        <el-container>
            <el-main>
                <div class="search_condition">
                    <dl>
                        <dt>分类</dt>
                        <dd>
                            <span :class="{selected: currClass== ''}" @click="handleFilterClass('')">全部</span>
                            <span v-for="(item,index) in classList" :key="index" :class="{selected: currClass== item.value}" @click="handleFilterClass(item.value)">{{item.name}}</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>筛选条件</dt>
                        <dd>
                            <label>点赞数：</label>
                            <el-select v-model="vfilter.points" size="small" placeholder="请选择">
                                <el-option
                                        v-for="item in pointsOpt"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                            <label>视频时长：</label>
                            <el-select v-model="vfilter.duration" size="small" placeholder="请选择">
                                <el-option
                                        v-for="item in durationOpt"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                            <el-checkbox v-model="vfilter.relatedVideo" size="small">关联商品视频</el-checkbox>
                        </dd>
                    </dl>
                    <dl>
                        <dt style="color:#f00">限豪华版使用</dt>
                        <dd>
                            <label><strong>观众画像筛选：</strong>男女比例：</label>
                            <el-select v-model="vfilter.ratio" size="small" placeholder="请选择">
                                <el-option
                                        v-for="item in ratioOpt"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                            <label>主要年龄：</label>
                            <el-select v-model="vfilter.age" size="small" placeholder="请选择">
                                <el-option
                                        v-for="item in ageOpt"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                            <label>主要地域：</label>
                            <el-cascader v-model="vfilter.region" :options="regionOpt" @change="handleChange"></el-cascader>
                        </dd>
                    </dl>
                </div>
                <div class="search_filter_box">
                    <el-radio-group v-model="sort_radio" class="videoClassSort" size="medium">
                        <el-radio-button label="1">综合排序</el-radio-button>
                        <el-radio-button label="2">点赞最多</el-radio-button>
                        <el-radio-button label="3">评论最多</el-radio-button>
                        <el-radio-button label="4">分享最多</el-radio-button>
                    </el-radio-group>
                    <el-radio-group v-model="time_radio" class="videoTimeSort" size="medium">
                        <el-radio-button label="6" >6小时</el-radio-button>
                        <el-radio-button label="12" >12小时</el-radio-button>
                        <el-radio-button label="24" >24小时</el-radio-button>
                        <el-radio-button label="3" >近3天</el-radio-button>
                        <el-radio-button label="7" >近7天</el-radio-button>
                        <el-radio-button label="15" >近15天</el-radio-button>
                        <el-radio-button label="30" >近30天</el-radio-button>
                        <el-radio-button label="60" >近60天</el-radio-button>
                        <el-radio-button label="90" >近90天</el-radio-button>
                    </el-radio-group>
                </div>
                <!-- 传播指数 	视频内容	播主	点赞数	评论数	操作-->
                <el-table :data="hotVideoData" style="width: 100%">
                    <el-table-column prop="spreadIndex" label="传播指数" width="180">
                        <template slot-scope="scope">
                            <el-button type="warning" icon="el-icon-video-camera-solid">{{scope.row.spreadIndex}}</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="video_content" label="视频内容" min-width="480">
                        <template slot-scope="scope">
                            <div class="video_content">
                                <img :src="scope.row.video_content.thumbUrl" alt="">
                                <div class="video-inner">
                                    <h5>{{scope.row.video_content.name}}</h5>
                                    <p>视频热词：<el-tag color="#e4f0ff" v-for="(item,index) in scope.row.video_content.vhot" :key="index">{{item}}</el-tag></p>
                                    <p>视频时长：{{scope.row.video_content.videoTime}}秒</p>
                                </div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="anchor" label="播主" align="center" width="200">
                        <template slot-scope="scope">
                            <div class="video_anchor">
                                <h5>{{scope.row.anchor}}</h5>
                                <p>{{scope.row.time}}</p>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="praiseNum" label="点赞数" align="center" width="120"></el-table-column>
                    <el-table-column prop="commentNum" label="评论数" align="center" width="120"></el-table-column>
                    <el-table-column label="操作" algin="center" width="260">
                        <template slot-scope="scope">
                            <el-tooltip class="item" effect="dark" content="热度分析" placement="top">
                                <el-button type="success" icon="el-icon-s-data" circle></el-button>
                            </el-tooltip>

                            <el-tooltip class="item" effect="dark" content="观众分析" placement="top">
                                <el-button type="primary" style="background: #765aff; border-color: #765aff;" icon="el-icon-user-solid" circle></el-button>
                            </el-tooltip>
                            <el-tooltip class="item" effect="dark" content="播放" placement="top">
                                <el-button type="primary" style="background: #629ce9;border-color: #629ce9;" icon="el-icon-video-camera-solid" circle></el-button>
                            </el-tooltip>
                            <el-tooltip class="item" effect="dark" content="收藏" placement="top">
                                <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                            </el-tooltip>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="video_page"></div>
            </el-main>
        </el-container>

    </div>
</template>

<script>
    export default {
        name: "hot_video",
        data() {
            return {
                commentQuery: '',
                sort_radio:'1',
                time_radio:'24',
                currClass:'',
                classList: [
                    {name: '网红美女', value: '1'}, {name: '网红帅哥', value: '2'}, {name: '搞笑', value: '3'}, {name: '情感',value: '4'}, {name: '剧情', value: '5'}, {name: '美食', value: '6'}, {name: '美妆', value: '7'}, {name: '种草',value: '8'},{name: '穿搭', value: '9'}, {name: '明星', value: '10'}, {name: '影视娱乐', value: '11'}, {name: '游戏',value: '12'}, {name: '宠物', value: '13'}, {name: '音乐', value: '14'}, {name: '舞蹈', value: '15'}, {name: '萌娃',value: '16'}, {name: '生活', value: '17'}, {name: '健康', value: '18'}, {name: '体育', value: '19'}, {name: '旅行',value: '20'}, {name: '动漫', value: '21'}, {name: '创意', value: '22'}, {name: '时尚', value: '23'}, {name: '母婴育儿',value: '24'}, {name: '教育', value: '25'}, {name: '职场教育', value: '26'}, {name: '汽车', value: '27'}, {name: '家居',value: '28'}, {name: '科技', value: '29'}, {name: '摄影教学', value: '30'}, {name: '政务',value: '31'}, {name: '知识资讯类', value: '32'}, {name: '办公软件', value: '33'}, {name: '文学艺术', value: '34'}],
                vfilter: {
                    points: '',
                    duration: '',
                    relatedVideo: '',
                    ratio: '',
                    age: '',
                    region: '',
                },
                pointsOpt: [
                    {label: '全部', value: 'all'},
                    {label: '<1万', value: '1'},
                    {label: '1万~5万', value: '1-5'},
                    {label: '5万~10万', value: '5-10'},
                    {label: '10万~50万', value: '10-50'},
                    {label: '50万~100万', value: '50-100'},
                    {label: '100万~200万', value: '100-200'},
                    {label: '>200万', value: '200+'},
                ],
                durationOpt: [
                    {label: '不限', value: 'all'},
                    {label: '15秒', value: '15'},
                    {label: '15~30秒', value: '15-30'},
                    {label: '30~60秒', value: '30-60'},
                    {label: '60秒', value: '60'},
                ],
                ratioOpt: [
                    {label: '全部', value: 'all'},
                    {label: '男观众多', value: 'Male'},
                    {label: '女观众多', value: 'female'},
                ],
                ageOpt: [
                    {label: '全部', value: 'all'},
                    {label: '6-17', value: '6-17'},
                    {label: '18-24', value: '18-24'},
                    {label: '25-30', value: '25-30'},
                    {label: '31-35', value: '31-35'},
                    {label: '36-40', value: '36-40'},
                    {label: '41+', value: '41+'},
                ],
                regionOpt:[
                    {
                        value: 'beijing',
                        label: '北京',
                        children: [{
                            value: 'fengtai',
                            label: '丰台区'
                        }, {
                            value: 'haidian',
                            label: '海淀区'
                        }, {
                            value: 'changping',
                            label: '昌平区'
                        }, {
                            value: 'xicheng',
                            label: '西城区'
                        }]
                    },
                    {
                        value: 'tianjin',
                        label: '天津',
                        children: [{
                            value: 'beichen',
                            label: '北辰区',

                        },{
                            value: 'hexi',
                            label: '河西区',

                        },{
                            value: 'hedong',
                            label: '河东区',

                        }]
                    }
                ],
                hotVideoData: [
                    {
                        spreadIndex:'84.8',
                        video_content:{
                            name:'#女人都喜欢😘的穿搭！寻找气质相同的你！',
                            thumbUrl: 'http://dy.liweiliang.com/temp/temp_03.jpeg',
                            vhot:['多少钱','衣服','谢谢','好看','外套','美女','大衣','喜欢','身材'],
                            videoTime:'16'
                        },
                        anchor:'长春市远东批发一期1-43服装',
                        time:'22 小时前',
                        praiseNum:'9955',
                        commentNum:'2386',
                    },
                    {
                        spreadIndex:'84.8',
                        video_content:{
                            name:'#女人都喜欢😘的穿搭！寻找气质相同的你！',
                            thumbUrl: 'http://dy.liweiliang.com/temp/temp_03.jpeg',
                            vhot:['多少钱','衣服','谢谢','好看','外套','美女','大衣','喜欢','身材'],
                            videoTime:'16'
                        },
                        anchor:'长春市远东批发一期1-43服装',
                        time:'22 小时前',
                        praiseNum:'9955',
                        commentNum:'2386',
                    },
                    {
                        spreadIndex:'84.8',
                        video_content:{
                            name:'#女人都喜欢😘的穿搭！寻找气质相同的你！',
                            thumbUrl: 'http://dy.liweiliang.com/temp/temp_03.jpeg',
                            vhot:['多少钱','衣服','谢谢','好看','外套','美女','大衣','喜欢','身材'],
                            videoTime:'16'
                        },
                        anchor:'长春市远东批发一期1-43服装',
                        time:'22 小时前',
                        praiseNum:'9955',
                        commentNum:'2386',
                    },
                    {
                        spreadIndex:'84.8',
                        video_content:{
                            name:'#女人都喜欢😘的穿搭！寻找气质相同的你！',
                            thumbUrl: 'http://dy.liweiliang.com/temp/temp_03.jpeg',
                            vhot:['多少钱','衣服','谢谢','好看','外套','美女','大衣','喜欢','身材'],
                            videoTime:'16'
                        },
                        anchor:'长春市远东批发一期1-43服装',
                        time:'22 小时前',
                        praiseNum:'9955',
                        commentNum:'2386',
                    },
                    {
                        spreadIndex:'84.8',
                        video_content:{
                            name:'#女人都喜欢😘的穿搭！寻找气质相同的你！',
                            thumbUrl: 'http://dy.liweiliang.com/temp/temp_03.jpeg',
                            vhot:['多少钱','衣服','谢谢','好看','外套','美女','大衣','喜欢','身材'],
                            videoTime:'16'
                        },
                        anchor:'长春市远东批发一期1-43服装',
                        time:'22 小时前',
                        praiseNum:'9955',
                        commentNum:'2386',
                    },


                ]
            }
        },
        methods: {
            searchClick() {

            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleFilterClass(params){
                this.currClass = params;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .hot_video
        width 100%
        .search_condition
            margin 20px 0 20px
            border-radius 3px
            padding 12px 20px
            background #fff
            //box-shadow 0 2px 20px 0 rgba(82, 196, 26, .14)

            dl
                display: flex;
                margin 0
                padding 10px
                border-bottom 1px dotted #f4f8fc

                dt
                    width 100px
                    vertical-align top
                    color #666
                    display flex
                    align-items center
                    justify-content flex-start
                    font-size 12px
                    padding-right 10px
                    box-sizing border-box
                    border-right 1px solid #dddddd

                dd
                    flex 1
                    margin 0
                    text-align left
                    padding-left 10px

                    label
                        font-size 12px
                        margin 0 10px

                    span
                        display inline-block
                        width 120px
                        cursor pointer
                        height 27px
                        line-height 27px
                        border-radius 3px
                        text-align center
                        white-space nowrap
                        color #333
                        font-size 12px

                        &.selected
                            color #fff
                            background #52c41a
                            &:hover
                                color #fff

                        &:hover
                            color #52c41a
        .search_filter_box
            display flex
            padding 10px
            background #fff
            border-bottom #E4E7ED
            .videoClassSort
                width 400px
            .videoTimeSort
                flex 1
                text-align right
        .video_content
            display: table;
            cursor pointer
            img
                display table-cell
                padding-right 10px
                border-radius 2px
                width 60px
                height 80px
            .video-inner
                display table-cell
                text-align left
                font-size 14px
                vertical-align middle
                h5
                    font-size 14px
                    color #333
                    letter-spacing 0
                    text-align justify
                    line-height 22px
                    margin 0
                    font-weight normal
                p
                    margin 0
                    color #999
                    line-height 40px
                    .el-tag
                        &:hover
                            background #caddfd
                        +.el-tag
                            margin-left: 10px;
        .video_anchor
            h5
                cursor pointer
                color #398ad9
                font-size 14px
                text-align left
                font-weight normal
            p
                color #999
    .comment_page
        height 50px
        margin-bottom 15px
</style>
<style lang="stylus">
    .hot_video


        .el-tabs__nav-wrap
            background #fff

        .el-tabs__active-bar
            background #52c41a

        .el-tabs__item
            height 50px
            line-height 50px
            color #595959

            &:hover
                color #52c41a

            &.is-active
                border-bottom 3px solid #52c41a
                box-sizing border-box
                color #52c41a

</style>
