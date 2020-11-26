# Raincloud plot code adapted from https://github.com/gabrifc/raincloud-shiny


## function to make drawing raincloud plots faster
plot_raincloud <- function(data, x_column, y_column, fill_column = x_column, main_title = "Main Plot Title", y_label = "y axis", x_label = "x axis", scatter_plot = TRUE, box_plot = TRUE, violin_plot = TRUE, plot_mean = TRUE, flip = TRUE){
  
  my_plot <- ggplot(data, aes_string(x = x_column, y = y_column, fill = fill_column, color = fill_column)) +
    ggtitle(main_title) +
    ylab(y_label) +
    xlab(x_label) +
    theme_cowplot() +
    scale_shape_identity() +
    theme(legend.position = "none",
          plot.title = element_text(size = 20),
          axis.title = element_text(size = 15),
          axis.text = element_text(size = 15),
          axis.text.x = element_text(angle = 0, 
                                     hjust = 0,
                                     vjust = 0)) +
    scale_colour_brewer(palette = "Set1") +
    scale_fill_brewer(palette = "Set1")
  if(scatter_plot) {
    my_plot <- my_plot + geom_point(position = position_jitter(0.15), 
                                    size = 0.3, 
                                    alpha = 0.5, 
                                    aes(shape = 16))
  }
  if(violin_plot){
    my_plot <- my_plot + geom_flat_violin(position = position_nudge(x = 0.2, y = 0),
                                          adjust = 2,
                                          alpha = 0.6, 
                                          trim = TRUE, 
                                          scale = "width")
  }
  if(box_plot){
    x_numeric <- as.numeric(unlist(data[,x_column]))
    my_plot <- my_plot + geom_boxplot(aes_string(x = x_numeric + 0.2, y = y_column), 
                                      notch = FALSE, 
                                      width = 0.1, 
                                      varwidth = FALSE, 
                                      outlier.shape = NA, 
                                      alpha = 0.3, 
                                      colour = "black", 
                                      show.legend = FALSE)
  }
  if(plot_mean){
    my_plot <- my_plot + stat_summary(fun.min = mean, 
                                      fun.max = mean,
                                      geom = "errorbar",
                                      width = 0.4,
                                      position = position_nudge(x = 0.2, y = 0),
                                      size = 0.2,
                                      color = "black")
  }
  if(flip){
    my_plot <- my_plot + coord_flip() # to flip the axes
  }
  my_plot # this will make the function return the plot
}

# File source: https://github.com/gabrifc/raincloud-shiny

# somewhat hackish solution to:
# https://twitter.com/EamonCaddigan/status/646759751242620928
# based mostly on copy/pasting from ggplot2 geom_violin source:
# https://github.com/hadley/ggplot2/blob/master/R/geom-violin.r

library(ggplot2)
library(dplyr)


"%||%" <- function(a, b) {
  if (!is.null(a)) a else b
}

geom_flat_violin <- function(mapping = NULL, data = NULL, stat = "ydensity",
                             position = "dodge", trim = TRUE, scale = "area",
                             show.legend = NA, inherit.aes = TRUE, ...) {
  layer(
    data = data,
    mapping = mapping,
    stat = stat,
    geom = GeomFlatViolin,
    position = position,
    show.legend = show.legend,
    inherit.aes = inherit.aes,
    params = list(
      trim = trim,
      scale = scale,
      ...
    )
  )
}

#' @rdname ggplot2-ggproto
#' @format NULL
#' @usage NULL
#' @export
GeomFlatViolin <-
  ggproto("GeomFlatViolin", Geom,
          setup_data = function(data, params) {
            data$width <- data$width %||%
              params$width %||% (resolution(data$x, FALSE) * 0.9)
            
            # ymin, ymax, xmin, and xmax define the bounding rectangle for each group
            data %>%
              group_by(group) %>%
              mutate(ymin = min(y),
                     ymax = max(y),
                     xmin = x,
                     xmax = x + width / 2)
          },
          
          draw_group = function(data, panel_scales, coord) {
            # Find the points for the line to go all the way around
            data <- transform(data, xminv = x,
                              xmaxv = x + violinwidth * (xmax - x))
            
            # Make sure it's sorted properly to draw the outline
            newdata <- rbind(plyr::arrange(transform(data, x = xminv), y),
                             plyr::arrange(transform(data, x = xmaxv), -y))
            
            # Close the polygon: set first and last point the same
            # Needed for coord_polar and such
            newdata <- rbind(newdata, newdata[1,])
            
            ggplot2:::ggname("geom_flat_violin", GeomPolygon$draw_panel(newdata, panel_scales, coord))
          },
          
          draw_key = draw_key_polygon,
          
          default_aes = aes(weight = 1, colour = "grey20", fill = "white", size = 0.5,
                            alpha = NA, linetype = "solid"),
          
          required_aes = c("x", "y")
  )
