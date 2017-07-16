package cn.tp.web.contorller;

import cn.tp.domain.pojo.Club;
import cn.tp.service.ClubService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by tppppp on 2017/5/16.
 */

@RestController
public class ClubController {
    Logger logger = LoggerFactory.getLogger(ClubController.class);

    @Autowired
    private ClubService clubService;

    @RequestMapping(value = "/clubInfo",produces = "application/json")
    public List<Club> findClub(){
        return clubService.findClub();
    }

}
