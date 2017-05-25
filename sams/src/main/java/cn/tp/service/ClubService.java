package cn.tp.service;

import cn.tp.domain.dao.ClubMapper;
import cn.tp.domain.pojo.Club;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by tppppp on 2017/5/16.
 */
@Service
public class ClubService {

    Logger logger = LoggerFactory.getLogger(ClubService.class);

    @Resource
    private ClubMapper clubMapper;

    public String findClubInfo(int id){
        List<Club> clubList= clubMapper.findClubInfo();
        for (Club club: clubList) {
            if(id == club.getId()){
                logger.info(club.getName());
                return club.getName();
            }
        }
        return null;
    }

    public List<Club> findClub(){
        List<Club> clubList= clubMapper.findClubInfo();
        logger.info("{}",clubList.get(0).getCreateTime());
        return clubList;
    }

}
