<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <nav
          class="navbar navbar-expand-lg blur blur-rounded top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4"
        >
          <div class="container-fluid px-0">
            <a
              class="navbar-brand font-weight-bolder ms-sm-3"
              href="#"
              rel="tooltip"
              title="Designed and Coded by Creative Tim"
              data-placement="bottom"
              style="
                font-size: 18px;
                padding: 0;
                letter-spacing: 5px;
                font-family: 'M PLUS Rounded 1c';
              "
            >
              광진기업
            </a>
            <button
              class="navbar-toggler shadow-none ms-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon mt-2">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </span>
            </button>
            <div class="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
              <ul class="navbar-nav navbar-nav-hover w-100">
                <li class="nav-item dropdown dropdown-hover mx-2">
                  <a
                    class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                    href="javascript:;"
                    id="dropdownMenuPages"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    회사소개&nbsp;
                    <DownArrowDarkVue></DownArrowDarkVue>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-animation dropdown-md p-3 border-radius-lg mt-0 mt-lg-3"
                    aria-labelledby="dropdownMenuPages"
                  >
                    <div class="d-none d-lg-block">
                      <router-link to="/intro" class="dropdown-item border-radius-md">
                        <span class="ps-3">회사 소개</span>
                      </router-link>
                      <router-link to="/greeting" class="dropdown-item border-radius-md">
                        <span class="ps-3">대표 인사말</span>
                      </router-link>
                      <router-link to="/location" class="dropdown-item border-radius-md">
                        <span class="ps-3">회사 약도</span>
                      </router-link>
                    </div>
                    <div class="d-lg-none">
                      <router-link to="/intro" class="dropdown-item border-radius-md">
                        <span class="ps-3">회사 소개</span>
                      </router-link>
                      <router-link to="/greeting" class="dropdown-item border-radius-md">
                        <span class="ps-3">대표 인사말</span>
                      </router-link>
                      <router-link to="/location" class="dropdown-item border-radius-md">
                        <span class="ps-3">회사 약도</span>
                      </router-link>
                    </div>
                  </div>
                </li>

                <li class="nav-item dropdown dropdown-hover mx-2">
                  <a
                    class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                    href="javascript:;"
                    id="dropdownMenuPages"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    보유 기술&nbsp;
                    <DownArrowDarkVue></DownArrowDarkVue>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-animation dropdown-md p-3 border-radius-lg mt-0 mt-lg-3"
                    aria-labelledby="dropdownMenuPages"
                  >
                    <div class="d-none d-lg-block">
                      <router-link to="/technology" class="dropdown-item border-radius-md">
                        <span class="ps-3">보유 기술</span>
                      </router-link>
                    </div>
                    <div class="d-lg-none">
                      <router-link to="/technology" class="dropdown-item border-radius-md">
                        <span class="ps-3">보유 기술</span>
                      </router-link>
                    </div>
                  </div>
                </li>

                <li class="nav-item dropdown dropdown-hover mx-2">
                  <a
                    class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                    href="javascript:;"
                    id="dropdownMenuPages"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    공장 소개&nbsp;
                    <DownArrowDarkVue></DownArrowDarkVue>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-animation dropdown-md p-3 border-radius-lg mt-0 mt-lg-3"
                    aria-labelledby="dropdownMenuPages"
                  >
                    <div class="d-none d-lg-block">
                      <router-link to="/factory" class="dropdown-item border-radius-md">
                        <span class="ps-3">공장 소개</span>
                      </router-link>
                      <router-link to="/machine" class="dropdown-item border-radius-md">
                        <span class="ps-3">보유 장비</span>
                      </router-link>
                    </div>
                    <div class="d-lg-none">
                      <router-link to="/factory" class="dropdown-item border-radius-md">
                        <span class="ps-3">공장 소개</span>
                      </router-link>
                      <router-link to="/machine" class="dropdown-item border-radius-md">
                        <span class="ps-3">보유 장비</span>
                      </router-link>
                    </div>
                  </div>
                </li>

                <li class="nav-item dropdown dropdown-hover mx-2">
                  <a
                    class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                    href="javascript:;"
                    id="dropdownMenuPages"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    작업 History&nbsp;
                    <DownArrowDarkVue></DownArrowDarkVue>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-animation dropdown-md p-3 border-radius-lg mt-0 mt-lg-3"
                    aria-labelledby="dropdownMenuPages"
                  >
                    <div class="d-none d-lg-block">
                      <router-link to="/history" class="dropdown-item border-radius-md">
                        <span class="ps-3">작업 이력</span>
                      </router-link>
                      <router-link to="/history_photo" class="dropdown-item border-radius-md">
                        <span class="ps-3">시공 사례</span>
                      </router-link>
                    </div>
                    <div class="d-lg-none">
                      <router-link to="/history" class="dropdown-item border-radius-md">
                        <span class="ps-3">작업 이력</span>
                      </router-link>
                      <router-link to="/history_photo" class="dropdown-item border-radius-md">
                        <span class="ps-3">시공 사례</span>
                      </router-link>
                    </div>
                  </div>
                </li>

                <li class="nav-item dropdown dropdown-hover mx-2">
                  <a
                    class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                    href="javascript:;"
                    id="dropdownMenuPages"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    문의하기&nbsp;
                    <DownArrowDarkVue></DownArrowDarkVue>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-animation dropdown-md p-3 border-radius-lg mt-0 mt-lg-3"
                    aria-labelledby="dropdownMenuPages"
                  >
                    <div class="d-none d-lg-block">
                      <router-link to="/contact" class="dropdown-item border-radius-md">
                        <span class="ps-3">문의 하기</span>
                      </router-link>
                    </div>
                    <div class="d-lg-none">
                      <router-link to="/contact" class="dropdown-item border-radius-md">
                        <span class="ps-3">문의 하기</span>
                      </router-link>
                    </div>
                  </div>
                </li>

                <!-- <li class="nav-item my-auto ms-3 ms-lg-0 ms-lg-auto">
                  <a
                    href="#"
                    class="btn btn-sm btn-outline-primary btn-round mb-0 me-1 mt-2 mt-md-0"
                    >교인등록</a
                  >
                </li>
                <li class="nav-item my-auto ms-3 ms-lg-0">
                  <a
                    href="#"
                    class="btn btn-sm bg-gradient-primary btn-round mb-0 me-1 mt-2 mt-md-0"
                    >로그인</a
                  >
                </li> -->
              </ul>
            </div>
          </div>
        </nav>
        <!-- End Navbar -->
      </div>
    </div>
  </div>
</template>

<script setup>
import DownArrowDarkVue from '@/assets/img/svg/DownArrowDark.vue'
</script>

<style lang="scss" scoped></style>
