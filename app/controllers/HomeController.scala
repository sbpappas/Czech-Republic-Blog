package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import views.html.main

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  /**
   * Create an Action to render an HTML page.
   *
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  def index() = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.index())
  }
  def blog() = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.landing())
  }

  //def training = Action { implicit request: Request[AnyContent] =>
  //    Ok(views.html.article1())
  //}
  def training = Action { implicit request: Request[AnyContent] =>
    val title = "Week 1: Training for the Summer"
    val paragraphs = Seq(
        "For the first week after arriving in Europe, Josiah Venture led training for the 30+ interns serving in 14 nations in central and eastern Europe.",
        "This first week was full of team-building, setting expectations for the summer, aligning ourselves spiritually, and learning more about JV as a whole."
    )
    val images = Seq(
        ("images/meatcastle.jpeg", "Checking out Prague on the first day there"),
        ("images/training2.jpeg", "photo 2 description"),
        ("images/training3.jpeg", "photo 2 description"),
        ("images/training4.jpeg", "photo 3 description")
    )
    Ok(views.html.article1(title, paragraphs, images))
  }

  def prep() = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.prep())
  }




}
