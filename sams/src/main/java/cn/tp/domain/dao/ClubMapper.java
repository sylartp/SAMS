package cn.tp.domain.dao;

import cn.tp.domain.pojo.Club;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.LinkedList;
import java.util.List;

/**
 * Created by tppppp on 2017/5/15.
 */
@Mapper
@Repository
public interface ClubMapper {

    @Select("select * from Club")
    @Results(id = "clubInfo", value = {
            @Result(property = "presentNum", column = "present_number"),
            @Result(property = "maxNum",column = "max_number"),
            @Result(property = "createTime",column = "create_time")
    })
    public LinkedList<Club> findClubInfo();

    @Update("update club set present_number = #{presentNum} where id = #{clubId}")
    public int updateClub(@Param("presentNum")int presentNum,@Param("clubId") int clubId);
}
