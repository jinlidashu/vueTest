<template>
    <div class="hot_comment">
        <el-container>
            <el-main>
                <div class="search-box">
                    <el-input v-model="commentQuery" class="search-input" placeholder="请输入评论关键字"></el-input>
                    <el-button type="success" icon="el-icon-search" @click="searchClick">搜索</el-button>
                </div>
                <div class="search_condition">
                    <dl>
                        <dt>车身结构</dt>
                        <dd>
                            <ul class="condition-sort-list">
                                <li><a class="selected">不限</a></li>
                                <li><a>两厢车</a></li>
                                <li><a>三厢车</a></li>
                                <li><a>掀背车</a></li>
                                <li><a>旅行车</a></li>
                                <li><a>硬顶车</a></li>
                                <li><a>软顶敞篷车</a></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                <!--<el-tabs v-model="activeName" @tab-click="handleClick">-->

                <!--<el-tab-pane label="默认排序" name="first">-->
                <!--<div class="comment_update_time">默认排序 最近更新时间：{{update_time}}</div>-->
                <!--<el-table :data="hotCommentData" style="width: 100%">-->
                <!--<el-table-column prop="comment" label="评论" width="380"></el-table-column>-->
                <!--<el-table-column prop="praisePointsNum" label="近7天总点赞数" width="220"></el-table-column>-->
                <!--<el-table-column prop="AssociatedVideoNum" label="近7天关联视频数" align="center" width="200"></el-table-column>-->
                <!--<el-table-column prop="hotTop" label="热门视频 Top 3" min-width="300">-->
                <!--<template slot-scope="scope">-->
                <!--<div class="hot_list">-->
                <!--<a target="_blank" v-for="(item,index) in scope.row.hotTop" :key="index" :href="item.url">-->
                <!--<img :src="item.thumbUrl" alt="">-->
                <!--<p>{{item.likeNum}}</p>-->
                <!--<span>播放</span>-->
                <!--</a>-->
                <!--</div>-->
                <!--</template>-->
                <!--</el-table-column>-->
                <!--<el-table-column label="操作" algin="center" width="100">-->
                <!--<template slot-scope="scope">-->
                <!--<el-tooltip class="item" effect="dark" content="热度分析" placement="top">-->
                <!--<el-button type="success" icon="el-icon-s-data" circle></el-button>-->
                <!--</el-tooltip>-->
                <!--</template>-->
                <!--</el-table-column>-->
                <!--</el-table>-->
                <!--<div class="comment_page"></div>-->
                <!--</el-tab-pane>-->
                <!--<el-tab-pane label="总点赞数最高" name="second">-->
                <!--<div class="comment_update_time">总点赞数最高 最近更新时间：{{update_time}}</div>-->
                <!--<el-table :data="hotCommentData" style="width: 100%">-->
                <!--<el-table-column prop="comment" label="评论" width="380"></el-table-column>-->
                <!--<el-table-column prop="praisePointsNum" label="近7天总点赞数" width="220"></el-table-column>-->
                <!--<el-table-column prop="AssociatedVideoNum" label="近7天关联视频数" align="center" width="200"></el-table-column>-->
                <!--<el-table-column prop="hotTop" label="热门视频 Top 3" min-width="300">-->
                <!--<template slot-scope="scope">-->
                <!--<div class="hot_list">-->
                <!--<a target="_blank" v-for="(item,index) in scope.row.hotTop" :key="index" :href="item.url">-->
                <!--<img :src="item.thumbUrl" alt="">-->
                <!--<p>{{item.likeNum}}</p>-->
                <!--<span>播放</span>-->
                <!--</a>-->
                <!--</div>-->
                <!--</template>-->
                <!--</el-table-column>-->
                <!--<el-table-column label="操作" algin="center" width="100">-->
                <!--<template slot-scope="scope">-->
                <!--<el-tooltip class="item" effect="dark" content="热度分析" placement="top">-->
                <!--<el-button type="success" icon="el-icon-s-data" circle></el-button>-->
                <!--</el-tooltip>-->
                <!--</template>-->
                <!--</el-table-column>-->
                <!--</el-table>-->
                <!--<div class="comment_page"></div>-->
                <!--</el-tab-pane>-->
                <!--<el-tab-pane label="关联视频最多" name="third">-->
                <!--<div class="comment_update_time">关联视频最多 最近更新时间：{{update_time}}</div>-->
                <!--<el-table :data="hotCommentData" style="width: 100%">-->
                <!--<el-table-column prop="comment" label="评论" width="380"></el-table-column>-->
                <!--<el-table-column prop="praisePointsNum" label="近7天总点赞数" width="220"></el-table-column>-->
                <!--<el-table-column prop="AssociatedVideoNum" label="近7天关联视频数" align="center" width="200"></el-table-column>-->
                <!--<el-table-column prop="hotTop" label="热门视频 Top 3" min-width="300">-->
                <!--<template slot-scope="scope">-->
                <!--<div class="hot_list">-->
                <!--<a target="_blank" v-for="(item,index) in scope.row.hotTop" :key="index" :href="item.url">-->
                <!--<img :src="item.thumbUrl" alt="">-->
                <!--<p>{{item.likeNum}}</p>-->
                <!--<span>播放</span>-->
                <!--</a>-->
                <!--</div>-->
                <!--</template>-->
                <!--</el-table-column>-->
                <!--<el-table-column label="操作" algin="center" width="100">-->
                <!--<template slot-scope="scope">-->
                <!--<el-tooltip class="item" effect="dark" content="热度分析" placement="top">-->
                <!--<el-button type="success" icon="el-icon-s-data" circle></el-button>-->
                <!--</el-tooltip>-->
                <!--</template>-->
                <!--</el-table-column>-->
                <!--</el-table>-->
                <!--<div class="comment_page"></div>-->
                <!--</el-tab-pane>-->
                <!--</el-tabs>-->
            </el-main>
        </el-container>

    </div>
</template>

<script>
    export default {
        name: "hot_comment",
        data() {
            return {
                commentQuery:'',
                activeName: 'first',
                search_result:'136,387,666',
                update_time:'2019-11-07 06:18',
                hotCommentData:[
                    {
                        comment:'来给生活比个耶',
                        praisePointsNum:'2037',
                        AssociatedVideoNum :'5',
                        hotTop:[
                            {url:'https://www.douyin.com/share/video/6755203973554244876/?mid=6750817353375877899',likeNum:'2.4w',thumbUrl:'http://dy.liweiliang.com/temp/temp_03.jpeg'},
                            {url:'https://www.douyin.com/share/video/6755203973554244876/?mid=6750817353375877899',likeNum:'3.4w',thumbUrl:'http://dy.liweiliang.com/temp/temp_03.jpeg'},
                            {url:'https://www.douyin.com/share/video/6755203973554244876/?mid=6750817353375877899',likeNum:'4.4w',thumbUrl:'http://dy.liweiliang.com/temp/temp_03.jpeg'},
                        ],
                    },
                    {
                        comment:'狗头军师所言极是',
                        praisePointsNum:'1712',
                        AssociatedVideoNum :'15',
                        hotTop:[
                            {url:'https://www.douyin.com/share/video/6755203973554244876/?mid=6750817353375877899',likeNum:'2.4w',thumbUrl:'http://dy.liweiliang.com/temp/temp_03.jpeg'},
                            {url:'https://www.douyin.com/share/video/6755203973554244876/?mid=6750817353375877899',likeNum:'3.4w',thumbUrl:'http://dy.liweiliang.com/temp/temp_03.jpeg'},
                            {url:'https://www.douyin.com/share/video/6755203973554244876/?mid=6750817353375877899',likeNum:'4.4w',thumbUrl:'http://dy.liweiliang.com/temp/temp_03.jpeg'},
                        ],
                    },
                    {
                        comment:'试图感动富婆第一天',
                        praisePointsNum:'5078',
                        AssociatedVideoNum :'53',
                        hotTop:[
                            {url:'https://www.douyin.com/share/video/6755203973554244876/?mid=6750817353375877899',likeNum:'2.4w',thumbUrl:'http://dy.liweiliang.com/temp/temp_03.jpeg'},
                            {url:'https://www.douyin.com/share/video/6755203973554244876/?mid=6750817353375877899',likeNum:'3.4w',thumbUrl:'http://dy.liweiliang.com/temp/temp_03.jpeg'},
                            {url:'https://www.douyin.com/share/video/6755203973554244876/?mid=6750817353375877899',likeNum:'4.4w',thumbUrl:'http://dy.liweiliang.com/temp/temp_03.jpeg'},
                        ],
                    },
                    {
                        comment:'试图感动富婆第一天',
                        praisePointsNum:'5078',
                        AssociatedVideoNum :'53',
                        hotTop:[
                            {url:'https://www.douyin.com/share/video/6755203973554244876/?mid=6750817353375877899',likeNum:'2.4w',thumbUrl:'http://dy.liweiliang.com/temp/temp_03.jpeg'},
                            {url:'https://www.douyin.com/share/video/6755203973554244876/?mid=6750817353375877899',likeNum:'3.4w',thumbUrl:'http://dy.liweiliang.com/temp/temp_03.jpeg'},
                            {url:'https://www.douyin.com/share/video/6755203973554244876/?mid=6750817353375877899',likeNum:'4.4w',thumbUrl:'http://dy.liweiliang.com/temp/temp_03.jpeg'},
                        ],
                    },
                    {
                        comment:'试图感动富婆第一天',
                        praisePointsNum:'5078',
                        AssociatedVideoNum :'53',
                        hotTop:[
                            {url:'https://www.douyin.com/share/video/6755203973554244876/?mid=6750817353375877899',likeNum:'2.4w',thumbUrl:'http://dy.liweiliang.com/temp/temp_03.jpeg'},
                            {url:'https://www.douyin.com/share/video/6755203973554244876/?mid=6750817353375877899',likeNum:'3.4w',thumbUrl:'http://dy.liweiliang.com/temp/temp_03.jpeg'},
                            {url:'https://www.douyin.com/share/video/6755203973554244876/?mid=6750817353375877899',likeNum:'4.4w',thumbUrl:'http://dy.liweiliang.com/temp/temp_03.jpeg'},
                        ],
                    },

                ]
            }
        },
        methods:{
            searchClick(){

            },
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .hot_comment
        width 100%
    .search-box
        display flex
        padding 20px 20px
        margin-bottom 20px
        background #fff
        .search-input
            width 500px
            margin-right 15px
    .comment_sort_box
        height 50px
        line-height 50px
        margin 20px 0
    .comment_update_time
        height 50px
        line-height 50px
        text-align right
    .hot_list
        a
            position relative
            display inline-block
            width 72px
            height 96px
            margin: 4px 2px;
            /*border-radius 4px*/
            cursor pointer
            text-decoration none
            &:hover:after{
                position absolute
                top 0
                left 0
                content ''
                width 100%
                height 100%
                background rgba(0,0,0,.3)
                border-radius 4px 4px 0 0
            }
            &:hover
                span
                    display: block
            span
                display none
                cursor pointer
                position absolute
                left 12px
                top 10px
                background #52c41a
                border-radius 4px
                width 48px
                height 30px
                color #fff
                text-align center
                line-height 30px
                z-index 4
                &:hover
                    background #4db619
            img
                position absolute
                top 0
                left 0
                display block
                width 72px
                height 96px
                border 0
                border-radius 4px
            p
                position absolute
                left 0
                bottom 3px
                width 100%
                line-height 20px
                padding-left 25px
                margin 0
                color #fff
                box-sizing border-box
                background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODg0MTIxMzQwMTA3MTFFQUEwMDFCRDFERDk5M0Y1NTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODg0MTIxMzMwMTA3MTFFQUEwMDFCRDFERDk5M0Y1NTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc4Q0MyQ0Q0QUVBODExRTlBMkYzQTUzMTdGRkE5MEU5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc4Q0MyQ0Q1QUVBODExRTlBMkYzQTUzMTdGRkE5MEU5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+g5SSDAAAAM5JREFUeNpi+P//PwMQswBxDhCfBeIvQPwEiGcBsTQQCwFxKxBfAuLXQHwZiGuBmAOkF6Z543/s4B0Qv8EhdwRkCMiArP/kgzJGkLMZGBiMGMgDF0EGfAYyeMg04AsTkPjLQD74BTLgEgUGnAMZsJoCA5aCYoELiB+TEQNXQEmAAZqQbIH4FwmaPwGxFiwhwXA6EP8lQvN3IPaG6UM2AIRjgfgnHs0fgNgZWQ+6ASBsCsR3sGgG5RNldPXYDIAFbCvUuaDMVQHNMxhqAQIMABkLFsp42WF9AAAAAElFTkSuQmCC") no-repeat 5px center
    .comment_page
        height 50px
        margin-bottom 15px
</style>
<style lang="stylus">
    .hot_comment
        .search_condition
            margin 20px 0 20px
            border-radius 3px
            padding 12px 20px
            background #fff
            box-shadow 0 2px 20px 0 rgba(82,196,26,.14)
            dl
                display: flex;
                margin 0
                padding 10px
                border-bottom 1px dotted #f4f8fc
                dt
                    width 80px
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
        .condition-sort-list
            list-style none
            margin 0
            padding 0 10px
            li
                position relative
                float left
                height 27px
                line-height 27px
                margin-right 10px
                &hover
                    a
                        color #3B9DE8
                a
                    display block
                    cursor pointer
                    height 27px
                    line-height 27px
                    padding 0 16px
                    border-radius 3px
                    white-space nowrap
                    color#333
                    font-size12px
                    &.selected
                        color #fff
                        background #52c41a
                    &hover
                        color #3B9DE8
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
