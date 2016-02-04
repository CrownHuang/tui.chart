tui.util.defineNamespace("fedoc.content", {});
fedoc.content["const.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Chart const\n * @author NHN Ent.\n *         FE Development Team &lt;dl_javascript@nhnent.com>\n */\n\n/**\n * Chart const\n * @readonly\n * @enum {number}\n */\nvar chartConst = {\n    /** tui class names\n     * @type {string}\n     */\n    CLASS_NAME_LEGEND_LABEL: 'tui-chart-legend-label',\n    /** @type {string} */\n    CLASS_NAME_LEGEND_CHECKBOX: 'tui-chart-legend-checkbox',\n    /** @type {string} */\n    CLASS_NAME_SERIES_LABEL: 'tui-chart-series-label',\n    /** @type {string} */\n    CLASS_NAME_SERIES_LEGEND: 'tui-chart-series-legend',\n    /** chart types\n     * @type {string}\n     */\n    CHART_TYPE_BAR: 'bar',\n    /** @type {string} */\n    CHART_TYPE_COLUMN: 'column',\n    /** @type {string} */\n    CHART_TYPE_LINE: 'line',\n    /** @type {string} */\n    CHART_TYPE_AREA: 'area',\n    /** @type {string} */\n    CHART_TYPE_COMBO: 'combo',\n    /** @type {string} */\n    CHART_TYPE_PIE: 'pie',\n    /** @type {string} */\n    CHART_TYPE_MAP: 'map',\n    /** chart padding */\n    CHART_PADDING: 10,\n    /** chart default width */\n    CHART_DEFAULT_WIDTH: 500,\n    /** chart default height */\n    CHART_DEFAULT_HEIGHT: 400,\n    /** hidden width */\n    HIDDEN_WIDTH: 1,\n    /** rendered text padding */\n    TEXT_PADDING: 2,\n    /** series expand size */\n    SERIES_EXPAND_SIZE: 10,\n    /** series label padding */\n    SERIES_LABEL_PADDING: 5,\n    /** default font size of title */\n    DEFAULT_TITLE_FONT_SIZE: 14,\n    /** default font size of axis title */\n    DEFAULT_AXIS_TITLE_FONT_SIZE: 10,\n    /** default font size of label */\n    DEFAULT_LABEL_FONT_SIZE: 12,\n    /** default font size of series label */\n    DEFAULT_SERIES_LABEL_FONT_SIZE: 11,\n    /** default graph plugin\n     * @type {string}\n     */\n    DEFAULT_PLUGIN: 'raphael',\n    /** default tick color\n     * @type {string}\n     */\n    DEFAULT_TICK_COLOR: 'black',\n    /** default theme name\n     * @type {string}\n     */\n    DEFAULT_THEME_NAME: 'default',\n    MAX_HEIGHT_WORLD: 'A',\n    /** stacked option types\n     * @type {string}\n     */\n    STACKED_NORMAL_TYPE: 'normal',\n    /** @type {string} */\n    STACKED_PERCENT_TYPE: 'percent',\n    /** empty axis label */\n    EMPTY_AXIS_LABEL: '',\n    /** angel */\n    ANGLE_85: 85,\n    ANGLE_90: 90,\n    ANGLE_360: 360,\n    /** radian */\n    RAD: Math.PI / 180,\n    /** series legend aligns\n     * @type {string}\n     */\n    LEGEND_ALIGN_OUTER: 'outer',\n    /** @type {string} */\n    LEGEND_ALIGN_CENTER: 'center',\n    /** @type {string} */\n    LEGEND_ALIGN_TOP: 'top',\n    /** @type {string} */\n    LEGEND_ALIGN_BOTTOM: 'bottom',\n    /** @type {string} */\n    LEGEND_ALIGN_LEFT: 'left',\n    /** series outer label padding */\n    SERIES_OUTER_LABEL_PADDING: 20,\n    /** default rate of pie graph */\n    PIE_GRAPH_DEFAULT_RATE: 0.8,\n    /** small rate of pie graph */\n    PIE_GRAPH_SMALL_RATE: 0.65,\n    /** tick count for map chart legend */\n    MAP_CHART_LEGEND_TICK_COUNT: 4,\n    /** default position ratio of map chart label\n     * @type {object}\n     */\n    MAP_CHART_LABEL_DEFAULT_POSITION_RATIO: {\n        x: 0.5,\n        y: 0.5\n    },\n    /** dot radius */\n    DOT_RADIUS: 4,\n    /** yAxis properties\n     * @type {Array.&lt;string>}\n     */\n    YAXIS_PROPS: ['tickColor', 'title', 'label'], // yaxis theme의 속성 - chart type filtering할 때 사용됨\n    /** series properties\n     * @type {Array.&lt;string>}\n     */\n    SERIES_PROPS: ['label', 'colors', 'borderColor', 'singleColors',\n        'selectionColor', 'startColor', 'endColor', 'overColor'], // series theme의 속성 - chart type filtering할 때 사용됨\n    /** title area width padding */\n    TITLE_AREA_WIDTH_PADDING: 20,\n    /** top margin of x axis label */\n    XAXIS_LABEL_TOP_MARGIN: 10,\n    /** right padding of vertical label */\n    V_LABEL_RIGHT_PADDING: 10,\n    /** tooltip prefix\n     * @type {string}\n     */\n    TOOLTIP_PREFIX: 'tui-chart-tooltip',\n    /** tooltip z-index **/\n    TOOLTIP_ZINDEX: 500,\n    /** tooltip animation time */\n    TOOLTIP_ANIMATION_TIME: 100,\n    /** tooltip animation time for pie chart */\n    TOOLTIP_PIE_ANIMATION_TIME: 50,\n    /** minimum pixel type step size */\n    MIN_PIXEL_TYPE_STEP_SIZE: 40,\n    /** maximum pixel type step size */\n    MAX_PIXEL_TYPE_STEP_SIZE: 60,\n    /** tick info of percent stacked option\n     * @type {object}\n     */\n    PERCENT_STACKED_TICK_INFO: {\n        limit: {\n            min: 0,\n            max: 100\n        },\n        step: 25,\n        tickCount: 5,\n        labels: [0, 25, 50, 75, 100]\n    },\n    /** tick info of negative percent stacked option\n     * @type {object}\n     */\n    NEGATIVE_PERCENT_STACKED_TICK_INFO: {\n        limit: {\n            min: -100,\n            max: 100\n        },\n        step: 25,\n        tickCount: 9,\n        labels: [-100, -75, -50, -25, 0, 25, 50, 75, 100]\n    },\n    /** tick info of diverging percent stacked option\n     * @type {object}\n     */\n    DIVERGENT_PERCENT_STACKED_TICK_INFO: {\n        limit: {\n            min: -100,\n            max: 100\n        },\n        step: 25,\n        tickCount: 9,\n        labels: [100, 75, 50, 25, 0, 25, 50, 75, 100]\n    },\n    /** title add padding */\n    TITLE_PADDING: 20,\n    /** legend area padding */\n    LEGEND_AREA_PADDING: 10,\n    /** legend checkbox width */\n    LEGEND_CHECKBOX_WIDTH: 20,\n    /** legend rect width */\n    LEGEND_RECT_WIDTH: 12,\n    /** lgend label left padding */\n    LEGEND_LABEL_LEFT_PADDING: 5,\n    /** map legend height */\n    MAP_LEGEND_SIZE: 200,\n    /** map legend graph size */\n    MAP_LEGEND_GRAPH_SIZE: 25,\n    /** map legend label padding */\n    MAP_LEGEND_LABEL_PADDING: 5,\n    /** AXIS LABEL PADDING */\n    AXIS_LABEL_PADDING: 7,\n    /** rotations degree candidates */\n    DEGREE_CANDIDATES: [25, 45, 65, 85],\n    /** xAxis label compare margin */\n    XAXIS_LABEL_COMPARE_MARGIN: 20,\n    /** xAxis label gutter */\n    XAXIS_LABEL_GUTTER: 2,\n    /**\n     * Standard multiple nums of axis\n     * @type {Array}\n     */\n    AXIS_STANDARD_MULTIPLE_NUMS: [1, 2, 5, 10, 20, 50, 100],\n    /**\n     * Last standard multiple num of axis\n     */\n    AXIS_LAST_STANDARD_MULTIPLE_NUM: 100,\n    /** label padding top */\n    LABEL_PADDING_TOP: 2,\n    /** line margin top */\n    LINE_MARGIN_TOP: 5,\n    /** tooltip gap */\n    TOOLTIP_GAP: 5,\n    /** tooltip direction\n     * @type {string}\n     */\n    TOOLTIP_DIRECTION_FORWARD: 'forword',\n    /** @type {string} */\n    TOOLTIP_DIRECTION_CENTER: 'center',\n    /** @type {string} */\n    TOOLTIP_DIRECTION_BACKWARD: 'backword',\n    /** tooltip align options\n     * @type {string}\n     */\n    TOOLTIP_DEFAULT_ALIGN_OPTION: 'center top',\n    /** @type {string} */\n    TOOLTIP_DEFAULT_HORIZONTAL_ALIGN_OPTION: 'right middle',\n    /** @type {string} */\n    TOOLTIP_DEFAULT_GROUP_ALIGN_OPTION: 'right middle',\n    /** @type {string} */\n    TOOLTIP_DEFAULT_GROUP_HORIZONTAL_ALIGN_OPTION: 'center bottom',\n    /** hide delay */\n    HIDE_DELAY: 200\n};\nmodule.exports = chartConst;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"