<script setup>
import {Menu,UserFilled,User,EditPen,SwitchButton,CaretBottom,Promotion,Crop,Setting,Goods,Place} from '@element-plus/icons-vue'
import {Star,Bell,BellFilled} from '@element-plus/icons-vue'
</script>

<template>
  <el-container class="layout-container">
    <el-aside width="220px">
      <div class="header-world">后台管理系统</div>
      <el-menu
        active-text-color="#3f9eff"
        background-color="#304156"
        default-active="/backSystem"
        text-color="#fff">
        <el-menu-item index="/backSystem">
          <el-icon><Menu /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/backSystem/member">
          <el-icon><UserFilled /></el-icon>
          <span>个人中心</span>
        </el-menu-item>
        <el-sub-menu index="/backSystem/userManage">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>系统信息管理</span>
          </template>
          <el-menu-item index="/backSystem/userManage">
            <el-icon><Crop /></el-icon>
            <span>用户信息</span>
          </el-menu-item>
          <el-menu-item index="/backSystem/adminManage">
            <el-icon><EditPen /></el-icon>
            <span>管理员信息</span>
          </el-menu-item>
        </el-sub-menu>
        
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Promotion /></el-icon>
            <span>商品信息管理</span>
          </template>
          <el-menu-item index="/backSystem/goodsManage">
            <el-icon><Goods /></el-icon>
            <span>商品信息</span>
          </el-menu-item>
          <el-menu-item index="/backSystem/regionManage">
            <el-icon><Place /></el-icon>
            <span>地区信息</span>
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="3">
          <template #title>
            <el-icon><Star /></el-icon>
            <span>订单信息管理</span>
          </template>
          <el-menu-item index="/backSystem/commonOrderManage">
            <el-icon><Bell /></el-icon>
            <span>普通订单信息</span>
          </el-menu-item>
          <el-menu-item index="/backSystem/dingzhiOrderManage">
            <el-icon><BellFilled /></el-icon>
            <span>定制订单信息</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div>管理员：<strong>管理员</strong></div>
        <el-dropdown placement="bottom-end">
          <span class="el-dropdown__box">
            <el-avatar />
            <el-icon><CaretBottom /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="User">
                基本信息
              </el-dropdown-item>
              <el-dropdown-item :icon="EditPen">
                重置密码
              </el-dropdown-item>
              <el-dropdown-item :icon="SwitchButton">
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <el-main>
        <!-- 静态页面占位 -->
        <div>内容区域</div>
      </el-main>
      <el-footer>CopyRight © 旅行社</el-footer>
    </el-container>
  </el-container>
</template>

<style scoped lang='scss'>
// --- 新增：移除Header顶部默认的边框/阴影 ---
.el-header {
  border-bottom: none; // 关键：移除底部边框
  box-shadow: none;    // 关键：移除阴影 (如果还有阴影的话)
  display: flex;
  align-items: center;
  justify-content: space-between;
  // 下面是你原来的样式
  .el-dropdown__box {
    display: flex;
    align-items: center;
    .el-icon {
      color: #999;
      margin-left: 10px;
    }
    &:active,
    &:focus {
      outline: none;
    }
  }
}

// 以下保持你原来的其他样式不变
.el-sub-menu{
  .el-menu-item {
    background-color: #1f2d3d;
  }
}

.header-world {
  color: white;
  font-size: 18px;
  font-weight: bold;
  height: 60px;
  background-color: #2b2f3a;
  display: flex;
  justify-content: center;
  align-items: center;
}

.layout-container {
  height: 100vh;
  .el-aside {
    background-color: #304156;
    .el-menu {
      border-right: none;
    }
  }
  
  .el-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;
  }
}
</style>