<template>
	<view class="home_wrapper">
		<view class="hea-top-bg">
			<image src="../../static/home/banner.png" mode="" class="hea-top-bgimg"></image>
			<view class="hea-top">
				<image class="image1" @click="jumpUrl('Area/MyHandbook/ManageHandbooks.html','MZSC')" src="../../static/home/navbar_switch@2x.png" alt=""></image>
				<view class="hea-top-center">
				  <view>
					<text @click="changePeriod">{{periodName}}</text>
					<image class="image2" src="../../static/home/icon_jiantou@2x.png" alt=""></image>
				  </view>
				  <view v-if='showToplist' class="n_ul">
					<view v-for="(item,index) in topList" :class="{active:item.isActive}" @click="handleClick(index)" :key="index">
						{{item.name}}
					</view>
				  </view>
				</view>
			</view>
		  <!--头部中间部分-->
			<view class="hea-center">
				<image class="hea-center-left"  :src="'../../static/home/img'+period+'@2x.png'" alt=""></image>
				<view class="hea-center-right">
				  <!--孕前期-->
					<view class="uli" v-if="period=='1'"  @click="jumpUrl('Area/Record/Pregnancy/BasicInfo/Record.html','MZSC')">
						<view style="margin-top: 1em;">
						  <image src="../../static/home/icon_mom@2x.png" alt="" class="img_n1"></image>
						  <text>{{userName ||'未填姓名'}}</text>
						</view>
						<view class="adviceName">{{adviceName}}</view>
					</view>
					  <!--孕产期-->
					<view class="uli" v-else-if="period=='2'"  @click="jumpUrl('Area/Home/BasicSituation/main.html','YYQ.Web')">
					  <view style="margin-top: 0;">
						  <image src="../../static/home/icon_mom@2x.png" alt="" class="img_n1"></image>
						  <text>{{userName||'未填姓名'}}</text>
					  </view>
					  <view style="margin-top: 0.5em;">
						  <image src="../../static/home/icon_clock@2x.png" alt="" class="img_n2"></image>
						  <text v-if="PreExpectedDate!=''">预产期:{{PreExpectedDate}}</text>
						  <text v-else>未填预产期</text>
					  </view>
					  <view style="margin-top: 0.5em;">
						  <image src="../../static/home/icon_rili@2x.png" alt="" class="img_n3"></image>
						  <text>{{TimeSpan||'未知'}}</text>
					  </view>
					</view>
					   <!--儿童期-->
					<view  class="uli" v-else-if="period=='3'"  @click="jumpUrl('Area/Home/BasicSituation/main.html','YYQ.Web')">
					  <view style="margin-top: 0rem;">
						  <image src="../../static/home/icon_mom@2x.png" alt="" class="img_n1"></image>
						  <text>{{userName||'未填姓名'}}</text>
					  </view>
					  <view style="margin-top: 0.5em;">
						  <image src="../../static/home/icon_baby@2x.png" alt="" class="img_n2"></image>
						  <text>{{ChildName||'未填姓名'}}</text>
					  </view>
					  <view style="margin-top: 0.5em;">
						  <image src="../../static/home/icon_rili@2x.png" alt="" class="img_n3"></image>
						  <text>{{TimeSpan||'未填出生日期'}}</text>
					  </view>
					</view>
				</view>
			</view>
		</view>	
		<!--基本信息-->
		<view class="hea-next-center">  
		    <image src="../../static/home/btn_basic@2x.png" v-if="period=='1'" alt="" @click="jumpUrl('Area/Record/Pregnancy/BasicInfo/Record.html','MZSC')"></image>
		    <image src="../../static/home/btn_basic@2x.png" v-else-if="period=='2'" alt=""  @click="jumpUrl('Area/Home/BasicSituation/main.html','YYQ.Web')"></image>
		    <image src="../../static/home/btn_basic@2x.png"  v-else-if="period=='3'" alt=""  @click="jumpUrl('Area/Home/BasicSituation/main.html','YYQ.Web')"></image>
		    <image src="../../static/home/btn_scan@2x.png" alt="" @click="jumpUrl('Area/View/Home/Home.html','MZSC')"></image>
		</view>
		<!--母婴信使-->
		<view class="myxs-view" v-if="dtPregnantMessager.length>0">
			<view class="uni-padding-wrap">
					<view class="page-section swiper">
						<view class="page-section-spacing">
							<swiper class="swiper" :indicator-dots="indicatorDots" 
								:indicator-active-color="indicatorActiveColor" :circular="circular" 
								:autoplay="autoplay" :interval="interval" :duration="duration">
								<swiper-item v-for="swiper in dtPregnantMessager" 
									:key="swiper.MessagerId"
									@click="jumpUrl('Area/Slidebar/MaternalMessenger/Main.html','YYQ.Web')">
									<view class="swiper-item uni-bg-red">
										<view class="swiper-box">
											<image src="../../static/home/myxs.png" mode="" class="my_img"></image>
											<text>母婴信使</text>
										</view>
										<view class="swiper-text">
											<text>{{swiper.Knowledge}}</text>
										</view>
									</view>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>
		</view>
		<!--母婴信使-->
		<!--孕前记录信息-->
		<view class="yq-view1" v-if="period=='1'">
		    <view class="yq-ul">
		      <view class="yq-li"  @click="jumpUrl('Area/Record/Pregnancy/SelfRecord/Record.html','MZSC')">
		        <image class="image1" src="../../static/home/icon_beiyunbamaziwojilu@2x.png" alt=""></image>
		        <view>备孕爸妈自我记录</view>
		        <image class="image2" src="../../static/home/icon_go@2x.png" alt=""></image>
		      </view>
		      <view class="yq-li" @click="jumpUrl('Area/Record/Pregnancy/MenstruationRecord/RecordList.html','MZSC')">
		          <image class="image1" src="../../static/home/icon_yuejingzhouqi@2x.png" alt=""></image>
		          <view>备孕期月经周期与体温记录</view>
		          <image class="image2" src="../../static/home/icon_go@2x.png" alt=""></image>
		      </view>
		    </view>
		</view>
		<!--孕产期-儿童期检查记录-->
		<view class="yc-view1" v-if="period!='1'">
		    <view class="yc-top">
		      <text v-for="(item,index) in tabRecord" @click="changeTabRecord(index)" :class="{active:item.isActive}" :key="index">{{item.name}}</text>
		    </view>
		    <view class="yc-center">
		        <view class="ul-n">
		          <view 
		            v-for="(record,index) in recordList" 
		            :key="index" 
		            @click="jumpUrl(record.url,'MZSC')"
		            :class="{active:record.isActive}">
		              <text>{{record.name}}</text>
		          </view>
		        </view>
		    </view>
		    <view class="yc-message" v-if="period=='2'">
		        <image src="../../static/home/icon_tips@2x.png" alt="提示"></image>
		        <view v-html="solo"></view>
		    </view>
		    <view class="yc-bottom" v-if="period=='2'">
		        <text @click="jumpUrl('Area/Information/Exception/Woman/womanException.html','YYQ.Web')">识别异常，及时就医></text>
		    </view>
		    <view class="yc-bottom" v-if="period=='3'">
		      <text @click="jumpUrl('Area/Information/Exception/Children/childrenException.html','YYQ.Web')">识别异常，及时就医></text>
		  </view>
		</view>
		<!--孕产期健康监测-->
		<view class="ycjc-view1" v-if="period=='2'">
		  <view class="yyzd-top">
		      <view><text></text>健康监测<text></text></view>
		  </view>
		  <view class="ul-n">
		    <view class="li-n"  @click="jumpUrl('Area/Record/Maternal/WeightSelfRecord/RecordList.html','MZSC')">
		      <image class="image1" src="../../static/home/icon_tizhongjiance@2x.png" alt=""></image>
		        <view>体重监测(孕5-40周)</view>
		      <image class="image2" src="../../static/home/icon_go@2x.png" alt=""></image>
		    </view>
		    <view class="li-n"  @click="jumpUrl('Area/Record/Maternal/MoveMentRecord/Record.html','MZSC')">
		      <image class="image1" src="../../static/home/icon_shutaidong@2x.png" alt=""></image>
		        <view>数胎动(孕28-41周)</view>
		      <image class="image2" src="../../static/home/icon_go@2x.png" alt=""></image>
		    </view>
		    <view class="li-n" @click="jumpUrl('Area/Information/PregnancyCheck/List.html','YYQ.Web')">
		      <image class="image1" src="../../static/home/icon_wodebaogao@2x.png" alt=""></image>
		       <view >孕期产检和提醒</view>
		      <image class="image2" src="../../static/home/icon_go@2x.png" alt=""></image>
		    </view>
		    <view class="li-n"  @click="jumpUrl('Area/Record/Maternal/LessonRecord/RecordList.html','MZSC')">
		      <image class="image1" src="../../static/home/icon_yunfuxuexiao@2x.png" alt=""></image>
		      <view>
		        <view class="p1">孕妇学校</view>
		        <view class="p2">孕期保健知识学习笔记</view>
		      </view>
		      <image class="image2" src="../../static/home/icon_go@2x.png" alt=""></image>
		    </view>
		  </view>
		</view>
		<!--儿童期预防接种-->
		<view class="ycjc-view1" v-if="period=='3'">
		  <view class="ul-n">
		    <view class="li-n" @click="jumpUrl('Area/Record/Vaccinate/Vaccinate/Record.html','MZSC')">
		      <image class="image1" src="../../static/home/icon_yufangjiezhong@2x.png" alt=""></image>
		      <view>
		        <view class="p1">预防接种</view>
		        <view class="p2">儿童疫苗接种时间表</view>
		      </view>
		      <image class="image2" src="../../static/home/icon_go@2x.png" alt=""></image>
		    </view>
		  </view>
		</view>
		<!--儿童期家庭树-->
		<view class="chiild-view1" v-if="period=='3'">
		  <view class="clearfix ul-n">
		    <view @click="jumpUrl('Area/Information/SecurityEvaluation/List.html','YYQ.Web')" class="li-n">
		      <view>家庭安全自评</view>
		      <image src="../../static/home/home_icon_jianchatixing@2x.png" alt=""></image>
		    </view>
		    <view @click="jumpUrl('Area/Record/Children/TeethingRecord/Record.html','MZSC')" class="li-n">
		      <view>宝宝出牙记录</view>
		      <image src="../../static/home/icon_chuyajilu@2x.png" alt=""></image>
		    </view>
		    <view @click="jumpUrl('Area/Information/GrowthAndPromote/list.html','YYQ.Web')" class="li-n">
		      <view>婴儿发育进程及促进方法</view>
		      <image src="../../static/home/icon_fayujingcheng@2x.png" alt=""></image>
		    </view>
		    <view @click="jumpUrl('Area/Information/FeedingAndSleep/list.html','YYQ.Web')" class="li-n">
		      <view>婴儿期喂养建议与睡觉特点</view>
		      <image src="../../static/home/icon_weiyang@2x.png" alt=""></image>
		    </view>
		  </view>
		</view>
		<!--生育政策问答-->
		<view class="born-question">
		    <image src="../../static/home/born@2x.png" alt="" @click="jumpUrl('Area/Information/BirthPolicy/index.html','YYQ.Web')"></image>
		</view>
		<!--备孕指导-->
		<view class="yyzd-list">
		    <view class="yyzd-top">
		        <view><text></text>{{topName}}<text></text></view>
		        <image src="../../static/home/home_baike_icon_renew@2x.png" alt="" @click="refreshYYQ"></image>
		    </view>
		    <view class="yyzd-center" v-for="(item,index) in yyqList" :key="index" 
		    @click="jumpWx('/pages/Web/share','?articleId='+item.ArticleId)">
		        <image :src="'../../static/home/'+imageList[parseInt(period)-1][index]"></image>
		        <view class="content">
		          <view class="p1">{{item.ArticleTitle}}</view>
		          <view class="p2">{{item.ArticleSubject}}</view>
		        </view>
		    </view>
		    <view class="yyzd-bottom" @click="jumpUrl('Area/Information/Encyclopedias/List.html','YYQ.Web')">
		        <view>查看更多></view>
		    </view>
		</view>
	</view>
	</view>
</template>

<script>
	//全局复制H5页面
	import {getIndexPageData,refreshArticles,updateBookPeriod} from '../../utils/api.js'
	import {mapGetters} from 'vuex'
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: false,
				indicatorActiveColor:'#FFA0CE',
				interval: 2000,
				duration: 500,
				circular:true,
				show:false,
				topList:[{name:'孕前篇',isActive:true},{name:'孕产期篇',isActive:false},{name:'儿童篇',isActive:false}],
				showToplist:false,
				period:'2',
				Mathlist:['保持最佳的体重','孕前开始吃叶酸','坚持健康的生活方式','口腔健康不容忽视','适龄生育有利母婴健康'],
				periodName:'',
				periodNameList:['','孕前篇','孕产期篇','儿童篇'],
				topName:'孕育指导',
				dtPregnantMessager:[],   //母婴信使
				BOOK_ID:'',
				BOOK_NO:'',
				PeriodDays:'',
				adviceName:'',
				Birthday:'',
				TimeSpan:'',
				PreExpectedDate:'',
				LastMensesDate:'',
				ChildBirthday:'',
				childrenMonth:'',
				ChildName:'',
				WomanStatus:'',
				yyqList:[],
				realName:'',
				childSex:'',
				childName:'',
				soloList:['<text>早孕阶段:</text>出现停经，恶心呕吐，食欲不振，乳房胀痛','<text>中孕阶段:</text>开始出现胎动，腹部逐渐增大，是贫血、妊娠期高血压疾病和妊娠期糖尿病高发时期。',
				'<text>晚孕阶段:</text>胎儿发育增快，腹部明显增大','<text>足月分娩:</text>早计划，早住院'],
				solo:'<text>早孕阶段:</text>出现停经，恶心呕吐，食欲不振，乳房胀痛',
				userName:'',
				imageList:[['yq1.png','yq2.png','yq3.png'],['yc1.png','yc2.png','yc3.png'],['ye1.png','ye2.png','ye3.png']],
				topNameList:['备孕指导','孕育指导','养育指导'],
				tabRecord:[{name:'自我记录',isActive:true},{name:'检查记录',isActive:false}],
				version:'',
				List:[   //自我检查记录(包括孕前和孕产期)
					[
						[
							{name:'甜蜜的时刻',isActive:false,url:'Area/Record/Maternal/SweetTime/Record.html'},
							{name:'准妈妈情况',isActive:false,url:'Area/Record/Maternal/BaseInfo/Record.html'},
							{name:'孕1~3月',isActive:false,url:'/Area/Record/Maternal/OneToThreeMonth/Record.html'},
							{name:'孕4~7月',isActive:false,url:'Area/Record/Maternal/FourToSevenMonth/Record.html'},
							{name:'孕8~10月',isActive:false,url:'Area/Record/Maternal/EightToTenMonth/Record.html'},
							{name:'分娩情况',isActive:false,url:'Area/Record/Maternal/ChildBirth/Record.html'},
							{name:'产褥期情况',isActive:false,url:'Area/Record/Maternal/Puerperium/Record.html'}
						],
						[
							{name:'孕1~3月',isActive:false,url:'Area/Record/Maternal/OneToThreeMonth/CheckRecord.html'},
							{name:'孕4~7月',isActive:false,url:'Area/Record/Maternal/FourToSevenMonth/CheckRecord.html'},
							{name:'孕8~10月',isActive:false,url:'Area/Record/Maternal/EightToTenMonth/CheckRecord.html'},
							{name:'分娩情况',isActive:false,url:'Area/Record/Maternal/ChildBirth/DoctorRecord.html'},
							{name:'产后访视',isActive:false,url:'Area/Record/Maternal/PostpartumVisits/RecordList.html'},
							{name:'产后42天检查',isActive:false,url:'Area/Record/Maternal/Postpartum42day/Record.html'}
						],    
					],
					[
						[
							{name:'宝宝出生记录',isActive:false,url:'Area/Record/Children/Birth/Record.html'},
							{name:'爸妈寄语',isActive:false,url:'Area/Record/Children/ParentRemarks/Record.html'},
							{name:'新生儿育儿记录',isActive:false,url:'Area/Record/Children/EarlyStage/Record.html'},
							{name:'1个月育儿记录',isActive:false,url:'Area/Record/Children/OneMonth/Record.html'},
							{name:'3个月育儿记录',isActive:false,url:'Area/Record/Children/ThreeMonth/Record.html'},
							{name:'6个月育儿记录',isActive:false,url:'Area/Record/Children/SixMonth/Record.html'},
							{name:'8个月育儿记录',isActive:false,url:'Area/Record/Children/EightMonth/Record.html'},
							{name:'1岁育儿记录',isActive:false,url:'Area/Record/Children/OneYear/Record.html'},
							{name:'1岁6个月育儿记录',isActive:false,url:'Area/Record/Children/OneAndHalfYear/Record.html'},
							{name:'2岁育儿记录',isActive:false,url:'Area/Record/Children/TwoYear/Record.html'},
							{name:'2岁6个月育儿记录',isActive:false,url:'Area/Record/Children/TwoAndHalfYear/Record.html'},
							{name:'3岁育儿记录',isActive:false,url:'Area/Record/Children/ThreeYear/Record.html'},
							{name:'4岁育儿记录',isActive:false,url:'Area/Record/Children/FourYear/Record.html'},
							{name:'5岁育儿记录',isActive:false,url:'Area/Record/Children/FiveYear/Record.html'},
							{name:'6岁育儿记录',isActive:false,url:'Area/Record/Children/SixYear/Record.html'},
						],
						[
							{name:'新生儿检查记录',isActive:false,url:'Area/Record/Children/EarlyStage/CheckRecord.html'},
							{name:'1个月检查记录',isActive:false,url:'Area/Record/Children/OneMonth/CheckRecord.html'},
							{name:'3个月检查记录',isActive:false,url:'Area/Record/Children/ThreeMonth/CheckRecord.html'},
							{name:'6个月检查记录',isActive:false,url:'Area/Record/Children/SixMonth/CheckRecord.html'},
							{name:'8个月检查记录',isActive:false,url:'Area/Record/Children/EightMonth/CheckRecord.html'},
							{name:'1岁检查记录',isActive:false,url:'Area/Record/Children/OneYear/CheckRecord.html'},
							{name:'1岁6个月检查记录',isActive:false,url:'Area/Record/Children/OneAndHalfYear/CheckRecord.html'},
							{name:'2岁检查记录',isActive:false,url:'Area/Record/Children/TwoYear/CheckRecord.html'},
							{name:'2岁6个月检查记录',isActive:false,url:'Area/Record/Children/TwoAndHalfYear/CheckRecord.html'},
							{name:'3岁检查记录',isActive:false,url:'Area/Record/Children/ThreeYear/CheckRecord.html'},
							{name:'4岁检查记录',isActive:false,url:'Area/Record/Children/FourYear/CheckRecord.html'},
							{name:'5岁检查记录',isActive:false,url:'Area/Record/Children/FiveYear/CheckRecord.html'},
							{name:'6岁检查记录',isActive:false,url:'Area/Record/Children/SixYear/CheckRecord.html'}
						],    
					],
					
				],
				recordList:[],
			}
		},
		computed:{
			...mapGetters([
				'openID',
				'userInfo'
			])
		},
		onLoad() {
			this.recordList=this.List[0];
			this.adviceName=this.Mathlist[Math.floor(Math.random()*this.Mathlist.length)]
		},
		onShow(){     // 监听页面的显示，返回刷新页面
			this.getIndex()
		},
		methods: {
			jumpWx(pages,params){  //跳转小程序原生页面
				uni.navigateTo({
					url: pages+params+'&WomanId='+JSON.parse(this.userInfo).WomanId
				});
			},
			changeTabRecord(index) {
				let that =this;
				this.tabRecord.map( item => { item.isActive=false })
				this.tabRecord[index].isActive=true;
				this.recordList=this.List[parseInt(this.period)-2][index]
				if(this.period=='2' && this.PeriodDays){
					let num = Math.floor(this.PeriodDays/7)
					if(index==0){
						if(num<12){
							this.recordList[2].isActive=true
						}
						else if(12<=num && num<28){
							this.recordList[3].isActive=true
						}
						else if(28<=num && num<40){
							this.recordList[4].isActive=true
						}
						else{
							this.recordList[5].isActive=true
						}
					}
					else{
						if(num<12){
							this.recordList[0].isActive=true
						}
						else if(12<=num && num<28){
							this.recordList[1].isActive=true
						}
						else if(28<=num && num<40){
							this.recordList[2].isActive=true
						}
						else{
							this.recordList[3].isActive=true
						}
					}
				}
				if(this.period=='3' && this.PeriodDays){
					let num= Math.floor(this.PeriodDays/30)
					if(index==0){
						if (num<1 && num>0){
							that.recordList[2].isActive=true
						}
						else if(1<=num && num<3){
							that.recordList[3].isActive=true
						}
						else if (3<=num && num<6){
							that.recordList[4].isActive=true
						}
						else if (6<=num && num<8){
							that.recordList[5].isActive=true
						}
						else if (8<=num && num<12){
							that.recordList[6].isActive=true
						}
						else if (12<=num && num<18){
							that.recordList[7].isActive=true
						}
						else if (18<=num && num<24){
							that.recordList[8].isActive=true
						}
						else if (24<=num && num<30){
							that.recordList[9].isActive=true
						}
						else if (30<=num && num<36){
							that.recordList[10].isActive=true
						}
						else if (36<=num && num<48){
							that.recordList[11].isActive=true
						}   
						else if (48<=num && num<60){
							that.recordList[12].isActive=true
						}
						else if (60<=num && num<72){
							that.recordList[13].isActive=true
						}
						else if (72<=num){
							that.recordList[14].isActive=true      
						}       
					}
					else{
						if (num<1){
							that.recordList[0].isActive=true
						}
						else if(1<=num && num<3){
							that.recordList[1].isActive=true
						}
						else if (3<=num && num<6){
							that.recordList[2].isActive=true
						}
						else if (6<=num && num<8){
							that.recordList[3].isActive=true
						}
						else if (8<=num && num<12){
							that.recordList[4].isActive=true
						}
						else if (12<=num && num<18){
							that.recordList[5].isActive=true
						}
						else if (18<=num && num<24){
							that.recordList[6].isActive=true
						}
						else if (24<=num && num<30){
							that.recordList[7].isActive=true
						}
						else if (30<=num && num<36){
							that.recordList[8].isActive=true
						}
						else if (36<=num && num<48){
							that.recordList[9].isActive=true
						}   
						else if (48<=num && num<60){
							that.recordList[10].isActive=true
						}
						else if (60<=num && num<72){
							that.recordList[11].isActive=true
						}
						else if (72<=num){
							that.recordList[12].isActive=true      
						} 
					}          
				}
			},
			changePeriod() {    //改变时期
				this.show=!this.show
				this.showToplist=!this.showToplist;
			},
			handleClick(index) {  //选择时期
				this.period=index+1+'';
				this.periodName=this.topList[index].name
				this.show=false
				this.showToplist=false
				this.topList.map( item =>{
					item.isActive=false
				})
				this.topList[index].isActive=true
				this.period!='1'?this.recordList=this.List[parseInt(this.period)-2][0]:''
				this.topName=this.topNameList[index]
				this.changePz(this.period)
			},
			changePz(index){  //切换篇章ajax
				uni.showLoading({
					title:'切换中'
				})
				updateBookPeriod({
					bookId:this.BOOK_ID,
					openId:this.openID,
					period:index
				}).then(res =>{
					console.log(res)	
					this.yyqList=res.dtData.dtKnowledge||[];
					this.topName=this.topNameList[parseInt(this.period)-1];
					this.periodName=this.periodNameList[parseInt(this.period)];
					this.WomanStatus=this.period;
					this.dtPregnantMessager=res.dtData.dtPregnantMessager?res.dtData.dtPregnantMessager:[]
					this.ChildName=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].ChildName ||'':''
					this.PreExpectedDate=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].PreExpectedDate ||'':''
					this.ChildBirthday=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].ChildBirthday||'':''
					this.TimeSpan=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].TimeSpan||'':''
					this.PeriodDays=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].PeriodDays||'':''
					this.realName=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].WomanName||'':''
					this.childName=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].ChildName||'':''
					this.childSex=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].ChildSex||'':''
					this.LastMensesDate=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].LastMensesDate||'':'',
					this.Birthday=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].Birthday||'':''
					this.topList.map(item =>{
						item.isActive=false
					})
					this.topList[parseInt(this.period)-1].isActive=true
					this.computeActive()
					uni.hideLoading()
				}).catch(err =>{
					uni.hideLoading()
				})
			},
			jumpUrl(url,type,item) {  //原生跳转H5页面
				!item?item='':''
				let womanLevel='';
				let currentChapter=''
				this.period =='1'?currentChapter ='孕前篇' : this.period == '2'?currentChapter = '孕产期篇' : currentChapter ='儿童篇'
				this.recordList.map( val =>{
					if(val.isActive){
						womanLevel=val.name
					}
				})
				let WxType = type =='MZSC'?'xcx.mzsc/':'xcx.web/'  //分包
				// #ifndef MP-WEIXIN  
				try{
					if(JSON.parse(this.userInfo)){
						console.log('onload')
					}
				}catch(e){
					this.$store.commit('setUserInfo',JSON.stringify({}))  
				}
				// #endif
				const httpWeb = this.$WebServer + WxType +url +'?deviceType=5'+'&APPType='+type+'&WomanId='+JSON.parse(this.userInfo).WomanId+
				'&machineCode='+this.openID+'&BOOK_ID='+this.BOOK_ID+'&BOOK_NO='+this.BOOK_NO+'&womanLevel='+womanLevel+'&WX=2'
				+'&WomanStatus='+this.WomanStatus+'&childrenMonth='+parseInt(parseInt(this.PeriodDays||0)/30)
				+'&preExpectedDate='+this.PreExpectedDate+'&realName='+this.realName+'&lastMensesDate='
				+this.LastMensesDate+'&childName='+this.childName+'&childSex='
				+this.childSex+'&childBirthday='+this.Birthday+'&districtNo='+JSON.parse(this.userInfo).DistrictNo+'&districtName='
				+JSON.parse(this.userInfo).DistrictFullName+'&currentChapter='+currentChapter+'&subsidiaryParams='+this.Birthday+item
				let urlHttps = encodeURIComponent(JSON.stringify(httpWeb))
				uni.navigateTo({
				    url: `../../pages/Web/index?url=${urlHttps}`,
				});
			},
			refreshYYQ(){  //孕育指导刷新
				refreshArticles({
					period:this.period ||'1',
					periodDays: 0,
				}).then(res =>{
					this.yyqList = res.dtData || []
				})
			},
			computeActive(){
				if(this.period=='2' && this.PeriodDays){
					let num= Math.floor(this.PeriodDays/7)
					if(num<12){
						this.recordList[2].isActive=true
						this.solo=this.soloList[0]
					}
					else if(12<num && num<28){
						this.recordList[3].isActive=true
						this.solo=this.soloList[1]
					}
					else if(28<=num && num<40){
						this.recordList[4].isActive=true
					}
					else{
						this.recordList[5].isActive=true
					}
					if(28<=num && num<37){
						this.solo=this.soloList[2]
					}
					if(num>37){
						this.solo=this.soloList[3]
					}
				}
				if(this.period=='3' && this.PeriodDays){
					let num= Math.floor(this.PeriodDays/30)
					if (1>num){
						this.recordList[2].isActive=true
					}
					else if(3>num && num>1){
						this.recordList[3].isActive=true
					}
					else if (6>num&& num>=3){
						this.recordList[4].isActive=true
					}
					else if (8>num && num>=6){
						this.recordList[5].isActive=true
					}
					else if (12>num && num>=8){
						this.recordList[6].isActive=true
					}
					else if (18>num && num>=12){
						this.recordList[7].isActive=true
					}
					else if (24>num && num>=18){
						this.recordList[8].isActive=true
					}
					else if (num>=24 && num<30){
						this.recordList[9].isActive=true
					}
					else if (30<=num && num<36){
						this.recordList[10].isActive=true
					}
					else if (36<=num && num<48){
						this.recordList[11].isActive=true
					}   
					else if (48<=num && num<60){
						this.recordList[12].isActive=true
					}
					else if (60<=num && num<72){
						this.recordList[13].isActive=true
					}
					else if (72<=num){
						this.recordList[14].isActive=true      
					}       
				}    
			},
			getIndex(){
				uni.showLoading({
				    title: '加载中'
				});
				getIndexPageData({
					openId:this.openID,
					bookId:''
				}).then( res =>{
					console.log(res)
					this.userName=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].WomanName ||'':'未填姓名'
					this.period=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].WomanStatus ||'1':'1'
					this.yyqList=res.dtData.dtKnowledge||[];
					this.period!='1'?this.recordList=this.List[parseInt(this.period)-2][0]:''
					this.topName=this.topNameList[parseInt(this.period)-1];
					this.dtPregnantMessager=res.dtData.dtPregnantMessager?res.dtData.dtPregnantMessager:[]
					this.periodName=this.periodNameList[parseInt(this.period)];
					this.BOOK_ID=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].BOOK_ID ||'':'';
					this.BOOK_NO=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].BOOK_NO ||'':'';
					this.WomanStatus=this.period;
					this.ChildName=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].ChildName ||'':''
					this.PreExpectedDate=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].PreExpectedDate ||'':''
					this.ChildBirthday=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].ChildBirthday||'':''
					this.TimeSpan=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].TimeSpan||'':''
					this.PeriodDays=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].PeriodDays||'':''
					this.realName=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].WomanName||'':''
					this.childName=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].ChildName||'':''
					this.childSex=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].ChildSex||'':''
					this.LastMensesDate=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].LastMensesDate||'':'',
					this.Birthday=res.dtData.dtUserInfo[0]?res.dtData.dtUserInfo[0].Birthday||'':''
					this.topList.map(item =>{
						item.isActive=false
					})
					this.topList[parseInt(this.period)-1].isActive=true
					this.computeActive()
					uni.hideLoading();
				}).catch(err =>{
					console.log(err)
					uni.hideLoading();
				})
			}
		}
	}
</script>

<style lang="scss">
	.home_wrapper{overflow-y:scroll;background-color:#F4F4F4;-webkit-overflow-scrolling : touch;}
	.hea-top-bg{position: relative;background: #FFFFFF;}
	.hea-top-bgimg{height: 394rpx;width: 100%;display: block;}
    .hea-top{display:flex;-webkit-display:flex;justify-content: flex-start;-webkit-justify-content: flex-start;padding:22.5rpx 30rpx;position: absolute;top: 0rpx;left: 0;right: 0;}
    .hea-top .image1{width: 42rpx;height: 40rpx;}
    .hea-top .image2{width: 28rpx;height: 16.5rpx;margin-left: 7.5rpx;}
    .hea-top-center{position: relative;flex: 1;text-align: center;padding-right: 60rpx;}
    .hea-top-center view{font-size: 37rpx;color: #fff;}
    .hea-top-center .n_ul{position:absolute;z-index:999;top: 60rpx;left: 50%;width:324rpx;background: #fff;opacity: 0.9;margin-left:-188rpx;border-radius: 5rpx;}
    .hea-top-center .n_ul view{text-align: center;height: 75rpx;line-height: 75rpx;color:#666;font-size: 36rpx;border-bottom:1px solid #e9e8e9;}
    .hea-top-center .n_ul view.active{background: #FF70B5;color: #fff;}
    .hea-top-center .n_ul view:nth-child(3){border:none;}
    .mockZ{position:absolute;top:0;left: 0;right: 0;bottom: 0;background: #777;opacity: 0.3;}
    .hea-next-center{ display: flex;-webkit-display:flex;justify-content: center;background: #fff;}
    .hea-next-center image{width: 221rpx;height: 116rpx;margin:12rpx 60rpx 6rpx 60rpx;}
	.hea-center{position: absolute;top: 72rpx;}
    .hea-center .hea-center-left{width: 237rpx;height: 237rpx;}
    .hea-center{padding:18rpx 30rpx;display: flex;-webkit-display:flex;}
    .hea-center .hea-center-right{margin-left: 22.5rpx;margin-top:22.5rpx;}
    .hea-center .hea-center-right .uli {font-size: 30rpx;color: #fff;padding:7.5rpx 0px;}
    .yq-view1{background: #fff;margin:10rpx auto;}
    .yq-view1 .yq-ul .yq-li{list-style: none;border-bottom:1px solid #EBEBEB;height: 140rpx ;list-style: none;background: #fff;color: #666;display: flex; align-items:center;margin:0 23rpx;}
    .yq-view1 .yq-ul  .image1{width: 55rpx;height: 55rpx;margin-right: 24rpx;}
    .yq-view1 .yq-ul .yq-li view{color: #333;font-size: 32rpx;}
    .yq-view1 .yq-ul  .image2{width: 20rpx;height: 34rpx;margin-left: auto;}
    .born-question{padding:26rpx 52rpx;}
    .born-question image{width: 100%;height: 88rpx;margin-bottom: 10rpx;}
    .born-question .born-view1{background: #fff;height: 75rpx;line-height: 75rpx;border-top-left-radius: 37rpx;border-bottom-left-radius: 37rpx;border-top-right-radius: 37rpx;border-bottom-right-radius: 37rpx;}
    .born-question .born-view1 p {text-align: center;color: #FF70B5;font-size: 32rpx;}
    .yyzd-list{background: #fff;}
    .yyzd-top{text-align: center;height: 90rpx;border-bottom: 1px solid #EBEBEB;line-height:90rpx;position: relative;}
    .yyzd-top view{font-size: 35rpx;color: #333333;font-weight: 600;}
    .yyzd-top image{width: 32rpx;height: 32rpx;position: absolute;right: 30rpx;top: 25rpx;}
    .yyzd-top text{height: 1rpx;width: 90rpx;display: inline-block;vertical-align: 7.5rpx;background: #333333;margin:0 15rpx;}
    .yyzd-list .yyzd-center{display: flex;-webkit-display: flex;padding: 22.5rpx 30rpx;border-bottom:1px solid #EBEBEB;}
    .yyzd-list .yyzd-center image{width: 150rpx !important;height: 150rpx !important;border-radius: 7.5rpx;}
    .yyzd-list .yyzd-center .content{margin-left: 30rpx;overflow: hidden;max-width: 70%;}
    .yyzd-list .yyzd-bottom{height: 75rpx;line-height: 75rpx;color:#FA7AB3;font-size: 30rpx;text-align: center;}
    .yyzd-list .yyzd-center .content .p1{font-size: 30rpx;color: #333;margin-bottom: 7.5rpx;overflow: hidden;word-break:break-all; text-overflow:ellipsis;display: -webkit-box; -webkit-line-clamp:2;-webkit-box-orient: vertical;}
    .yyzd-list .yyzd-center .content .p2{font-size: 24rpx;color: #999999;overflow: hidden;word-break:break-all; text-overflow:ellipsis;display: -webkit-box; -webkit-line-clamp:2;-webkit-box-orient: vertical;}

    .yc-view1 .yc-top{height: 90rpx;display: flex;-webkit-display:flex;justify-content: center;padding:0 37rpx;border-bottom:1rpx solid #EBEBEB;background: #fff;margin-top: 30rpx;}
    .yc-view1 .yc-top text{flex: 2;text-align: center;padding-top: 30rpx;position: relative;cursor: pointer;font-size: 32rpx;}
    .yc-view1 .yc-top text.active{color: #FF9FCD;}
    .yc-view1 .yc-top text.active::before{content: '';position: absolute;bottom: 0;left: 50%;width: 90rpx;height: 2rpx;background: #FF9FCD;margin-left: -40rpx;}
    .yc-view1 .yc-center{overflow-x: auto;white-space:nowrap;width: 100%;-webkit-overflow-scrolling : touch;background: #fff;;}
    .yc-view1 .yc-center .ul-n {width: 100%;padding:50rpx 0 26.5rpx 0;}
    .yc-view1 .yc-center .ul-n view::before{content:'';position:absolute;top: 52.5rpx;right: -37.5rpx;width:30rpx;height: 2rpx;background: #FFA9D3;}
    .yc-view1 .yc-center .ul-n view::before:last-child{width: 0px}
    .yc-view1 .yc-center .ul-n view.active{border:7.5rpx solid #FF9FCD;}
    .yc-view1 .yc-center .ul-n view{list-style: none;display:inline-block;margin:0 15rpx;border:7.5rpx solid #C9EEFF;width: 120rpx;height: 120rpx;border-radius: 50%;line-height: 120rpx;position: relative;white-space:normal;}
    .yc-view1 .yc-center .ul-n view text{color: #666;word-break:break-all;font-size: 27rpx;display:inline-block;width:100%;text-align: center;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);line-height: 1.3;}
    .yc-view1 .yc-bottom{padding:0 0 26.5rpx 0;text-align: center;background: #fff;}
    .yc-view1 .yc-bottom text{color: #FFA1CE;font-size: 30rpx;display: inline-block;padding: 7.5rpx 60rpx;border:1rpx solid #FFA1CE;border-top-left-radius: 37.5rpx;border-bottom-left-radius: 37.5rpx;
	border-top-right-radius: 37.5rpx;border-bottom-right-radius: 37.5rpx;}
    .yc-view1 .yc-message{display:flex;-webkit-display:flex;background: #fff;padding:0 30rpx 37.5rpx 30rpx;font-size: 27rpx;color: #999999;}
    .yc-view1 .yc-message image{width: 36rpx;height: 33.75rpx;display: inline-block;margin-right: 11.25rpx;}
    .yc-view1 .yc-message text{color: #666666;font-size: 30rpx;padding-right: 7.5rpx;}

    .ycjc-view1{background: #fff;margin:10rpx auto;}
    .ycjc-view1 .ul-n .li-n{list-style: none;border-bottom:1rpx solid #EBEBEB;height: 140rpx ;list-style: none;background: #fff;color: #666;display: flex; align-items:center;margin:0 30rpx;}
    .ycjc-view1 .ul-n .li-n .image1{width: 55.5rpx;height: 55.5rpx;margin-right: 24rpx;}
    .ycjc-view1 .ul-n .li-n view{color: #333;font-size: 32rpx;}
    .ycjc-view1 .ul-n .li-n .image2{width: 20.25rpx;height: 33.75rpx;margin-left: auto;}
    .ycjc-view1 .ul-n .li-n .p1{color: #999;font-size: 30rpx;padding-bottom: 6rpx;}

    .chiild-view1{background: #fff;}
    .chiild-view1 .li-n{float: left;display: flex;-webkit-display:flex;-webkit-display:flex;width: 46%;border-radius:16.5rpx;margin:26.25rpx 2%;border:1rpx solid #EEEEEE;box-sizing: border-box;height: 113rpx;align-items: center;}
    .chiild-view1 .li-n image{width:56rpx;height: 56rpx;margin-left:auto;padding:0 30rpx;}
    .chiild-view1 .li-n view{font-size:32rpx;color: #666;padding-left:18.75rpx;}
	.img_n1{width: 33rpx;height: 30rpx;margin-right: 10rpx;vertical-align: -2rpx;}
	.img_n2{width: 32rpx;height: 32rpx;margin-right: 10rpx;vertical-align: -2rpx;}
	.img_n3{width: 28rpx;height: 29rpx;margin-right: 10rpx;vertical-align: -2rpx;}
	.adviceName{margin-top: 10rpx;}
	.clearfix::after { visibility: hidden; display: block; font-size: 0; content: " ";clear: both; height: 0; }
	.myxs-view{
		background: #fff;margin:10rpx 0rpx;
		.swiper-item{
			padding:40rpx 30rpx;
			.swiper-box{
				display: flex;
				align-items: center;
				text{
					font-size: 28rpx;
					font-weight: bold;
					color: #666;
				}
				.my_img{
					width: 42rpx;
					height: 44rpx;
					margin-right: 10rpx;
				}
			}
			.swiper-text{
				padding-top: 10rpx;
				text{
					font-size: 30rpx;
					line-height: 42rpx;
					color: #666;
				}
			}
		}
	}
</style>
