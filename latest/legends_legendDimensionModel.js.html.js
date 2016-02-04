tui.util.defineNamespace("fedoc.content", {});
fedoc.content["legends_legendDimensionModel.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview LegendDimensionModel is legend dimension model.\n * @author NHN Ent.\n *         FE Development Team &lt;dl_javascript@nhnent.com>\n */\n\n'use strict';\n\nvar chartConst = require('../const'),\n    predicate = require('../helpers/predicate'),\n    renderUtil = require('../helpers/renderUtil');\n\nvar LegendDimensionModel = tui.util.defineClass(/** @lends LegendDimensionModel.prototype */ {\n    /**\n     * LegendDimensionModel is legend dimension model.\n     * @constructs LegendDimensionModel\n     * @param {object} params parameters\n     *      @param {string} params.chartType chart type\n     *      @param {object} params.options legend options\n     *      @param {object} params.theme legend theme\n     *      @param {Array.&lt;string | number>} params.legendLabels legend labels\n     */\n    init: function(params) {\n        this.chartType = params.chartType;\n\n        this.options = params.options;\n\n        this.theme = params.theme;\n\n        this.legendLabels = params.legendLabels;\n\n        this.legendCheckboxWidth = this.options.hasCheckbox === false ? 0 : chartConst.LEGEND_CHECKBOX_WIDTH;\n    },\n\n    /**\n     * Make legend width.\n     * @param {number} labelWidth label width\n     * @returns {number} legend width\n     * @private\n     */\n    _makeLegendWidth: function(labelWidth) {\n        return labelWidth + this.legendCheckboxWidth + chartConst.LEGEND_RECT_WIDTH +\n            chartConst.LEGEND_LABEL_LEFT_PADDING + chartConst.LEGEND_AREA_PADDING;\n    },\n\n    /**\n     * Calculate sum of legends width.\n     * @param {Array.&lt;string>} labels legend labels\n     * @param {{fontSize: number, fontFamily: number}} labelTheme legend label theme\n     * @returns {number} sum of width\n     * @private\n     */\n    _calculateLegendsWidthSum: function(labels, labelTheme) {\n        return tui.util.sum(tui.util.map(labels, function(label) {\n            var labelWidth = this._makeLegendWidth(renderUtil.getRenderedLabelWidth(label, labelTheme));\n            return labelWidth;\n        }, this));\n    },\n\n    /**\n     * Divide legend labels.\n     * @param {Array.&lt;string>} labels legend labels\n     * @param {number} count division count\n     * @returns {Array.&lt;Array.&lt;string>>} divided labels\n     * @private\n     */\n    _divideLegendLabels: function(labels, count) {\n        var limitCount = Math.round(labels.length / count),\n            results = [],\n            temp = [];\n\n        tui.util.forEachArray(labels, function(label) {\n            if (temp.length &lt; limitCount) {\n                temp.push(label);\n            } else {\n                results.push(temp);\n                temp = [label];\n            }\n        });\n\n        if (temp.length) {\n            results.push(temp);\n        }\n\n        return results;\n    },\n\n    /**\n     * Make division labels and max line width.\n     * @param {Array.&lt;string>} labels legend labels\n     * @param {number} chartWidth chart width\n     * @param {{fontSize: number, fontFamily: number}} labelTheme legend label theme\n     * @returns {{dividedLabels: Array.&lt;Array.&lt;string>>, maxLineWidth: number}} result\n     * @private\n     */\n    _makeDividedLabelsAndMaxLineWidth: function(labels, chartWidth, labelTheme) {\n        var divideCount = 1,\n            maxLineWidth = 0,\n            prevMaxWidth = 0,\n            dividedLabels, lineWidths, prevLabels;\n\n        do {\n            dividedLabels = this._divideLegendLabels(labels, divideCount);\n            lineWidths = tui.util.map(dividedLabels, function(_labels) {\n                return this._calculateLegendsWidthSum(_labels, labelTheme);\n            }, this);\n            maxLineWidth = Math.max.apply(null, lineWidths);\n\n            if (prevMaxWidth === maxLineWidth) {\n                dividedLabels = prevLabels;\n                break;\n            }\n\n            prevMaxWidth = maxLineWidth;\n            prevLabels = dividedLabels;\n            divideCount += 1;\n        } while (maxLineWidth >= chartWidth);\n\n        return {\n            dividedLabels: dividedLabels,\n            maxLineWidth: maxLineWidth\n        };\n    },\n\n    /**\n     * Calculate height of horizontal legend.\n     * @param {Array.&lt;Array.&lt;string>>} dividedLabels divided labels\n     * @param {{fontSize: number, fontFamily: number}} labelTheme legend label theme\n     * @returns {number} legend height\n     * @private\n     */\n    _calculateHorizontalLegendHeight: function(dividedLabels, labelTheme) {\n        return tui.util.sum(tui.util.map(dividedLabels, function(labels) {\n            return renderUtil.getRenderedLabelsMaxHeight(labels, labelTheme);\n        }, this));\n    },\n\n    /**\n     * Make dimension of horizontal legend.\n     * @param {number} chartWidth chart width\n     * @param {{fontSize: number, fontFamily: number}} labelTheme legend label theme\n     * @returns {{width: number, height: (number)}} dimension of horizontal legend\n     * @private\n     */\n    _makeHorizontalDimension: function(chartWidth) {\n        var labelsAndMaxWidth = this._makeDividedLabelsAndMaxLineWidth(this.legendLabels, chartWidth, this.theme.label),\n            legendHeight = this._calculateHorizontalLegendHeight(labelsAndMaxWidth.dividedLabels, this.theme.label) + (chartConst.LEGEND_AREA_PADDING * 2);\n\n        return {\n            width: labelsAndMaxWidth.maxLineWidth,\n            height: legendHeight\n        };\n    },\n\n    /**\n     * Make dimension of vertical legend.\n     * @param {{fontSize: number, fontFamily: number}} labelTheme legend label theme\n     * @returns {{width: (number)}} dimension of vertical legend\n     * @private\n     */\n    _makeVerticalDimension: function() {\n        var maxLabelWidth = renderUtil.getRenderedLabelsMaxWidth(this.legendLabels, this.theme.label),\n            legendWidth = this._makeLegendWidth(maxLabelWidth);\n        return {\n            width: legendWidth,\n            height: 0\n        };\n    },\n\n    /**\n     * Whether skipped legend sizing or not.\n     * @returns {boolean} result boolean\n     * @private\n     */\n    _isSkipLegend: function() {\n        return (predicate.isPieChart(this.chartType) &amp;&amp; predicate.isPieLegendAlign(this.options.align)) || this.options.hidden;\n    },\n\n    /**\n     * Make legend dimension.\n     * @param {number} chartWidth chart width\n     * @returns {{width: number, height: number}} legend dimention\n     */\n    makeDimension: function(chartWidth) {\n        var dimension = {};\n\n        if (this._isSkipLegend()) {\n            dimension.width = 0;\n        } else if (predicate.isHorizontalLegend(this.options.align)) {\n            dimension = this._makeHorizontalDimension(chartWidth);\n        } else {\n            dimension = this._makeVerticalDimension();\n        }\n\n        return dimension;\n    }\n});\n\nmodule.exports = LegendDimensionModel;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"