package cn.tp.web.contorller;

import cn.tp.domain.pojo.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by tppppp on 2017/3/9.
 */
@RestController
public class UserController {

    public ModelAndView index() {
        return new ModelAndView("index");
    }
    @RequestMapping("/success")
    public ModelAndView success(){
        return new ModelAndView("views/success");
    }
}
