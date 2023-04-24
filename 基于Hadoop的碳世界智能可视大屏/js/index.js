// 概览区域
(function () {
  $.ajax({
    url: "https://interface.sina.cn/news/wap/fymap2020_data.d.json",
    dataType: 'jsonp',
    jsonp: 'callback',
    jsonpCallback: 'abc',
    success: function (res) {
      console.log(res.data.gntotal);
      $('.overview>.inner>ul>li>#gntotal').text(res.data.gntotal);
      $('.overview>.inner>ul>li>#deathtotal').text(res.data.deathtotal);
      $('.overview>.inner>ul>li>#jwsrNum').text(res.data.jwsrNum);
      $('.overview>.inner>ul>li>#curetotal').text(res.data.curetotal);
    }
  });
})();

// 资讯区域
(function () {
  $('.monitor .tabs').on('click', 'a', function () {
    $(this).addClass('active').siblings('a').removeClass('active');
    // 选取对应索引号的content盒子
    $('.monitor .content').eq($(this).index()).show().siblings('.content').hide();
  })
})();

// 各领域碳排放量占比统计（总量超过1000MT）区域
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector('.pie'));
  // 2.指定配置项和数据
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    series: [
      {
        name: '点位',
        type: 'pie',
        radius: ["10%", "80%"],
        center: ['50%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 5
        },

        data: [
          { value: 4311.88, name: '化工原料和化工产品' },
          { value: 2421.35, name: '石油加工和炼焦' },
          { value: 1797.47, name: '农业、林业、畜牧业、渔业和水利业' },
          { value: 1605.85, name: '煤炭开采和选矿' },
          { value: 1378.85, name: '批发、零售贸易和餐饮服务' },
          { value: 1184.95, name: '有色金属的冶炼和压制' }
        ],
        // 修饰饼形图文字相关的样式
        label: {
          fontSize: 8
        },
        // 修饰图和字的连线
        labelLine: {
          length: 6,
          length2: 8
        }
      }
    ]
  };
  // 3.将配置项和数据给实例化对象
  myChart.setOption(option);
  // 4.当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener('resize', function () {
    // 让图表调用resize这个方法
    myChart.resize();
  })
})();

// 碳排放量省份TOP10
(function () {
  var item = {
    name: '',
    value: 1200,
    itemStyle: {
      color: '#254065'
    },
    // 鼠标放在柱子上不高亮显示
    emphasis: {
      color: '#254065'
    },
    // 没有提示框
    tooltip: {
      extraCssText: "opacity: 0"
    }
  }
  var myChart = echarts.init(document.querySelector('.bar'));
  var option = {
    // 改柱形图的颜色
    color: new echarts.graphic.LinearGradient(
      // (x1,y2) 点到点 (x2,y2) 之间进行渐变
      0,
      0,
      0,
      1,
      [
        { offset: 0, color: "#00fffb" }, // 0 起始颜色
        { offset: 1, color: "#0061ce" } // 1 结束颜色
      ]
    ),
    tooltip: {
      trigger: 'item',
    },
    // 网格
    grid: {
      left: '0%',
      right: '3%',
      top: '3%',
      bottom: '3%',
      containLabel: true,
      show: true,
      borderColor: 'rgba(0,240,255,.3)'
    },
    xAxis: [
      {
        type: 'category',
        data: [
          "山东",
          "河北",
          "江苏",
          "内蒙古",
          "广东",
          "山西",
          "辽宁",
          "新疆",
          "安徽",
          "浙江",
        ],
        // 刻度线
        axisTick: {
          alignWithLabel: false,
          //把x轴的刻度隐藏起来
          show: false
        },
        // 文字
        axisLabel: {
          color: '#4c9bfd'
        },
        // x坐标轴
        axisLine: {
          lineStyle: {
            color: 'rgba(0,240,255,.3)'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          alignWithLabel: false,
          //把x轴的刻度隐藏起来
          show: false
        },
        // 文字
        axisLabel: {
          color: '#4c9bfd'
        },
        // y坐标轴
        axisLine: {
          lineStyle: {
            color: 'rgba(0,240,255,.3)'
          }
        },
        // y轴分割线
        splitLine: {
          lineStyle: {
            color: 'rgba(0,240,255,.3)'
          }
        }
      }
    ],
    series: [
      {
        name: '碳排放量',
        type: 'bar',
        barWidth: '60%',
        data: [
          1874.2338,
          1828.4182,
          1609.1884,
          1588.5587,
          1138.2391,
          1129.7266,
          1066.7768,
          921.2616,
          910.5491,
          816.1286
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 4.当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener('resize', function () {
    // 让图表调用resize这个方法
    myChart.resize();
  });
})();


// 
(function () {
  $('.order .filter').on('click', 'a', function () {
    $(this).addClass('active').siblings('a').removeClass('active');
    $('.order .data').eq($(this).index()).show().siblings('.data').hide();
  })
})();

// 
(function () {

  // (1)准备数据
  var data = {
    year: [
      2924,2886,2879,3303,3250,3472,4084,4696,5398,6009,6546,6761,7334,7905,8742,9081,9534,9451,9254,9256,9408,9621,9795
    ],
    month: [
      1837,1767,1722,1767,1868,2049,2434,2788,3151,3488,3752,3872,4163,4408,4918,5077,5272,5010,4844,4807,4903,4957,4912
    ]
  };
  var xdata = {
    year:['1997年','1998年','1999年','2000年','2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年','2019年'],
    month: [
      '1997年','1998年','1999年','2000年','2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年','2019年'
    ]
  };

  var myChart = echarts.init(document.querySelector('.line'));
  var option = {
    tooltip: {
      // 通过坐标轴来触发
      trigger: 'axis'
    },
    legend: {
      data: ['碳排放量'],
      right: '10%',
      // 修饰图例文字的颜色
      textStyle: {
        color: '#4c9bfd'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '20%',
      containLabel: true,
      show: true,
      borderColor: '#012f4a',
      // 显示坐标轴上的刻度文字
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xdata.year,
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#4c9bfd'
      },
      axisLine: {
        show: false
      },
      // 数据线紧贴y轴显示
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#4c9bfd'
      },
      // 分割线
      splitLine: {
        lineStyle: {
          color: '#012f4a'
        }
      }
    },
    color: [ '#ed3f35'],
    series: [
      {
        name: '二氧化碳排放量',
        type: 'line',
        stack: '总量',
        smooth: true,
        data: data.year
      }
    ]
  };
  myChart.setOption(option);

  // tab栏切换
  // （2）点击切换
  $('.sales .caption').on('click', 'a', function () {
    index = $(this).index() - 1;
    $(this).addClass('active').siblings('a').removeClass('active');
    // .dataset.type拿到当前a的自定义属性值 data-type
    var arr = data[this.dataset.type];
    var xarr = xdata[this.dataset.type];
    // 重新渲染series里面的data值
    option.series[0].data = arr;
    option.xAxis.data = xarr;
    // 重新把配置好的新数据设置
    myChart.setOption(option);
  });
  // （3）自动切换效果
  var as = $('.sales .caption a');
  var index = 0;
  // 开启定时器
  var timer = setInterval(function () {
    index++;
    as.eq(index).click();
    if (index >= 3) {
      index = -1;
    }
  }, 3000);
  // 鼠标经过sales就停止定时器
  $('.sales').hover(function () {
    clearInterval(timer);

  }, function () {
    clearInterval(timer);
    timer = setInterval(function () {
      index++;
      as.eq(index).click();
      if (index >= 3) {
        index = -1;
      }
    }, 3000);
  });
  window.addEventListener('resize', function () {
    // 让图表调用resize这个方法
    myChart.resize();
  });
})();

// 模块

(function () {
  var myChart = echarts.init(document.querySelector('.funnel'));
  var option = {
    series: [
      {
        name: 'Funnel',
        type: 'funnel',
        left: '10%',
        top: 5,
        bottom: 10,
        width: '80%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside'
        },
        labelLine: {
          length: 1,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: {
          label: {
            fontSize: 20
          }
        },
        data: [
          { value: 60, name: '重庆' },
          { value: 40, name: '甘肃' },
          { value: 20, name: '云南' },
          { value: 80, name: '青海' },
          { value: 100, name: '海南' }
        ]
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    // 让图表调用resize这个方法
    myChart.resize();
  });
})();

// 能源消费/碳排放总量率模块 半圆形
(function () {
  var myChart = echarts.init(document.querySelector('.gauge'));
  var option = {
    series: [
      {
        name: '能源消费/碳排放总量',
        type: 'pie',
        // 大小
        radius: ['100%', '120%'],
        // 位置
        center: ['48%', '80%'],
        labelLine: {
          show: false
        },
        // 鼠标经过不放大
        hoverOffset: 0,
        data: [
          {
            value: 54,
            itemStyle: {
              // 颜色渐变#00c9e0->#005fc1
              color: new echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0,
                0,
                0,
                1,
                [
                  { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                  { offset: 1, color: "#005fc1" } // 1 结束颜色
                ]
              )
            }
          },
          {
            value: 46,
            itemStyle: {
              color: "#12274d"
            }
          },
          {
            value: 100,
            itemStyle: {
              color: 'transparent'
            }
          },
        ],
        // 饼状图的起始角度
        startAngle: 180
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    // 让图表调用resize这个方法
    myChart.resize();
  });
})();

