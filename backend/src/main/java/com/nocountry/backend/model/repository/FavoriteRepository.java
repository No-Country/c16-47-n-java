package com.nocountry.backend.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.nocountry.backend.model.entity.Favorite;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite,Long>{
}
